import{demoSelectors}from "../support/selectors/demoSelectors"
import { addToCartSelectors } from "../support/selectors/addToCartSelectors";
import { textMessage } from "../support/textMessage";

function addtocart(selector,productName,index,name,url,productDescribe,text,productPrice,price,addtoCartButton,backToProduct,inventoryURL){
  cy.get(selector).should('be.visible');
  cy.get(productName).eq(index).should('have.text',name)
  .click(); 
  cy.url().should('include',url);

  cy.get(productDescribe).should('contain', text);
  cy.get(productPrice).should('contain', price);
  cy.get(addtoCartButton).should('be.visible')
  .click();
  cy.get(backToProduct).should('be.visible').click();
  
}

describe('Product page', () => {
  it('product page should be visible', () => {
    cy.login('standard_user','secret_sauce');
   
    cy.get(demoSelectors.addToCartSelector).should('be.visible');

    addtocart(
      addToCartSelectors.backpackSelector,
      demoSelectors.productNameSelector,
      textMessage.zero,
      textMessage.backpackTextName,
      textMessage.backpackLink,
      demoSelectors.productDescribeSelector,
      textMessage.backpackTextDescribe,
      demoSelectors.productPriceSelector,
      textMessage.backpackPrice,
      addToCartSelectors.addToCartButton,
      addToCartSelectors.backToProduct,
      textMessage.inventoryLink,
    )

    addtocart(
      addToCartSelectors.bikeLightSelector,
      demoSelectors.productNameSelector,
      textMessage.one,
      textMessage.bikeLightTextName,
      textMessage.bikeLightLink,
      demoSelectors.productDescribeSelector,
      textMessage.bikeLightTextDescribe,
      demoSelectors.productPriceSelector,
      textMessage.bikeLightPrice,
      addToCartSelectors.addToCartButton,
      addToCartSelectors.backToProduct,
      textMessage.inventoryLink,

    )

    addtocart(
      addToCartSelectors.boltTshirtSelector,
      demoSelectors.productNameSelector,
      textMessage.two,
      textMessage.boltTshirtTextName,
      textMessage.boltTshirtLink,
      demoSelectors.productDescribeSelector,
      textMessage.boltTshirtTextDescribe,
      demoSelectors.productPriceSelector,
      textMessage.boltTshirtPrice,
      addToCartSelectors.addToCartButton,
      addToCartSelectors.backToProduct,
      textMessage.inventoryLink,

    )
    addtocart(
      addToCartSelectors.fleeceJacketSelector,
      demoSelectors.productNameSelector,
      textMessage.three,
      textMessage.fleeceJacketTextName,
      textMessage.fleeceJacketLink,
      demoSelectors.productDescribeSelector,
      textMessage.fleeceJacketTextDescribe,
      demoSelectors.productPriceSelector,
      textMessage.fleecejacketPrice,
      addToCartSelectors.addToCartButton,
      addToCartSelectors.backToProduct,
      textMessage.inventoryLink,

    )


    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '4');
    cy.get(demoSelectors.addToCartSelector).click();
    cy.url().should('include',textMessage.cartLink);
    cy.get(addToCartSelectors.yourCartText).should('have.text', 'Your Cart');
    cy.get(addToCartSelectors.quantitySelector).should('have.text', 'QTY'); 
    cy.get(addToCartSelectors.descriptionSelector).should('have.text', 'Description');

    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', textMessage.backpackTextName); 
    cy.get(demoSelectors.productNameSelector).eq(2).should('contain', textMessage.boltTshirtTextName); 

  
    cy.get(demoSelectors.productNameSelector).eq(0).should('have.text', textMessage.backpackTextName)
    .click(); 
    cy.url().should('include',textMessage.backpackLink);
    cy.get(addToCartSelectors.removeButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include',textMessage.inventoryLink); 
    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '3');
    cy.get(demoSelectors.addToCartSelector).click();
    cy.url().should('include',textMessage.cartLink);

    cy.get(demoSelectors.productNameSelector).eq(2).should('have.text', textMessage.fleeceJacketTextName)
    .click();
    cy.url().should('include',textMessage.fleeceJacketLink);
    cy.get(addToCartSelectors.removeButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include',textMessage.inventoryLink); 
    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '2');
    cy.get(demoSelectors.addToCartSelector).click();


    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(addToCartSelectors.continueShoppingButton).click();
    cy.url().should('include',textMessage.inventoryLink);
    cy.get(demoSelectors.addToCartSelector).should('be.visible').click();
    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(addToCartSelectors.checkoutButton).click();
    cy.url().should('include',textMessage.checkoutStepOneLink);
    cy.get(addToCartSelectors.yourCartText).should('have.text', textMessage.checkoutInfoText );
    cy.get(addToCartSelectors.firstNameSelector).should('have.attr', 'placeholder', 'First Name').click();
    cy.get(addToCartSelectors.lastNameSelector).should('have.attr', 'placeholder', 'Last Name').click();
    cy.get(addToCartSelectors.postalCodeSelector).should('have.attr', 'placeholder', 'Zip/Postal Code').click();

     //leave input field
     cy.get(addToCartSelectors.firstNameId).clear();
     cy.get(addToCartSelectors.lastNameId).clear();
     cy.get(addToCartSelectors.postalCodeId).clear();
     cy.get(addToCartSelectors.continueButton).click();
     cy.get(addToCartSelectors.errorMessageContainer).should('be.visible');
     cy.get('h3').should('have.text',textMessage.firstNameRequired);

     //Enter input field
     cy.get(addToCartSelectors.firstNameId).clear().type('a');
     cy.get(addToCartSelectors.lastNameId).clear().type('b');
     cy.get(addToCartSelectors.postalCodeId).clear().type('c');
     cy.get(addToCartSelectors.cancelButton).click();

     cy.url().should('include',textMessage.cartLink);
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');

     cy.get(addToCartSelectors.checkoutButton).click();
     cy.url().should('include',textMessage.checkoutStepOneLink);
     cy.get(addToCartSelectors.firstNameId).clear().type('Subhekshya');
     cy.get(addToCartSelectors.lastNameId).clear().type('Baral');
     cy.get(addToCartSelectors.postalCodeId).clear().type('12345');

     cy.get(addToCartSelectors.continueButton).click();
     cy.url().should('include',textMessage.checkoutStepTwoLink);
     cy.get('.title').should('have.text', textMessage.checkoutOverview);
     cy.get(demoSelectors.productNameSelector).eq(0).should('have.text', textMessage.bikeLightTextName); 
     cy.get(demoSelectors.productNameSelector).eq(1).should('have.text', textMessage.boltTshirtTextName); 
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');
     cy.get(addToCartSelectors.paymentInfoLevelSelector).should('have.text',textMessage.paymentInfo);
     cy.get(addToCartSelectors.paymentInfoValueSelector).should('have.text',textMessage.paymentValue);
     cy.get(addToCartSelectors.shippingInfoLevelSelector).should('have.text',textMessage.shippingInfo);
     cy.get(addToCartSelectors.shippingInfoValueSelector).should('have.text',textMessage.shippingValue);
     cy.get(addToCartSelectors.totalInfoLevelSelector).should('have.text',textMessage.totalInfo);
     cy.get(addToCartSelectors.subtotalLevelSelector).should('have.text',textMessage.subTotalInfo);
     cy.get(addToCartSelectors.taxlevelSelector).should('have.text',textMessage.taxLabel);
     cy.get(addToCartSelectors.totalLabelSelector).should('have.text',textMessage.totalLabel);

     cy.get(addToCartSelectors.finishButton).click();
     cy.url().should('include', textMessage.checkoutCompleteLink);
     cy.get('.title').should('have.text', textMessage.checkoutCompleteText);
     cy.get(addToCartSelectors.completeHeader).should('have.text',textMessage.completeHeaderText);
     cy.get(addToCartSelectors.completeText).should('have.text',textMessage.completeOrderMessage);
     cy.get(addToCartSelectors.backToProduct).click();
     cy.url().should('include', textMessage.inventoryLink);

  })
})