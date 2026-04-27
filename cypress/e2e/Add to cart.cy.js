describe('Product page', () => {
  it('product page should be visible', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get('#user-name').clear().type("standard_user");
    cy.get('#password').clear().type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should('include','/inventory.html');

    cy.get('#shopping_cart_container').should('be.visible');

    cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Backpack'); 
    cy.get('#item_4_title_link').should('be.visible');
    cy.get('div[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99');
    cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-backpack').click();

    cy.get('div[data-test="inventory-item-name"]').eq(1).should('have.text', 'Sauce Labs Bike Light'); 
    cy.get('#item_0_img_link').should('be.visible');
    cy.get('div[data-test="inventory-item-desc"]').should('contain', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    cy.get('div[data-test="inventory-item-price"]').should('contain', '$9.99');
    cy.get('#add-to-cart-sauce-labs-bike-light').click();

    cy.get('div[data-test="inventory-item-name"]').eq(2).should('have.text', 'Sauce Labs Bolt T-Shirt'); 
    cy.get('#item_3_title_link').should('be.visible');
    cy.get('div[data-test="inventory-item-desc"]').should('contain', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
    cy.get('div[data-test="inventory-item-price"]').should('contain', '$15.99');
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

    cy.get('div[data-test="inventory-item-name"]').eq(3).should('have.text','Sauce Labs Fleece Jacket');
    cy.get('#item_5_title_link').should('be.visible');
    cy.get('div[data-test="inventory-item-desc"]').should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
    cy.get('div[data-test="inventory-item-price"]').should('contain','$49.99');
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

    cy.get('span.shopping_cart_badge[data-test="shopping-cart-badge"]').should('be.visible').and('contain', '4');
    cy.get('#shopping_cart_container').should('be.visible').click();
    cy.url().should('include','https://www.saucedemo.com/cart.html');
    cy.get('.title').should('have.text', 'Your Cart');
    cy.get('div[data-test="cart-quantity-label"]').should('have.text', 'QTY'); 
    cy.get('div[data-test="cart-desc-label"]').should('have.text', 'Description');

    cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Backpack'); 
    cy.get('div[data-test="inventory-item-name"]').eq(2).should('contain', 'Sauce Labs Bolt T-Shirt'); 

    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('#remove-sauce-labs-fleece-jacket').click();

    cy.get('span.shopping_cart_badge[data-test="shopping-cart-badge"]').should('contain', '2');

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get('#continue-shopping').click();
    cy.url().should('include','https://www.saucedemo.com/inventory.html');
    cy.get('#shopping_cart_container').should('be.visible').click();
    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get('#checkout').click();
    cy.url().should('include','https://www.saucedemo.com/checkout-step-one.html');
    cy.get('.title').should('have.text', 'Checkout: Your Information');
    cy.get('input[name="firstName"]').should('have.attr', 'placeholder', 'First Name').click();
    cy.get('input[name="lastName"]').should('have.attr', 'placeholder', 'Last Name').click();
    cy.get('input[name="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code').click();

     //leave input field
     cy.get('#first-name').clear();
     cy.get('#last-name').clear();
     cy.get('#postal-code').clear();
     cy.get('#continue').click();
     cy.get('div[class="error-message-container error"]').should('be.visible');
     cy.get('h3').should('have.text','Error: First Name is required');

     //Enter input field
     cy.get('#first-name').clear().type('a');
     cy.get('#last-name').clear().type('b');
     cy.get('#postal-code').clear().type('c');
     cy.get('#cancel').click();

     cy.url().should('include','https://www.saucedemo.com/cart.html');
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');

     cy.get('#checkout').click();
     cy.url().should('include','https://www.saucedemo.com/checkout-step-one.html');
     cy.get('#first-name').clear().type('Subhekshya');
     cy.get('#last-name').clear().type('Baral');
     cy.get('#postal-code').clear().type('12345');

     cy.get('#continue').click();
     cy.url().should('include','https://www.saucedemo.com/checkout-step-two.html');
     cy.get('.title').should('have.text', 'Checkout: Overview');
     cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Bike Light'); 
     cy.get('div[data-test="inventory-item-name"]').eq(1).should('have.text', 'Sauce Labs Bolt T-Shirt'); 
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');
     cy.get('div[data-test="payment-info-label"]').should('have.text','Payment Information:');
     cy.get('div[data-test="payment-info-value"]').should('have.text','SauceCard #31337');
     cy.get('div[data-test="shipping-info-label"]').should('have.text','Shipping Information:');
     cy.get('div[data-test="shipping-info-value"]').should('have.text','Free Pony Express Delivery!');
     cy.get('div[data-test="total-info-label"]').should('have.text','Price Total');
     cy.get('div[data-test="subtotal-label"]').should('have.text','Item total: $25.98');
     cy.get('div[data-test="tax-label"]').should('have.text','Tax: $2.08');
     cy.get('div[data-test="total-label"]').should('have.text','Total: $28.06');

     cy.get('#finish').click();
     cy.url().should('include','https://www.saucedemo.com/checkout-complete.html');
     cy.get('.title').should('have.text', 'Checkout: Complete!');
     cy.get('h2[data-test="complete-header"]').should('have.text','Thank you for your order!');
     cy.get('div[data-test="complete-text"]').should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
     cy.get('#back-to-products').click();
     cy.url().should('include','https://www.saucedemo.com/inventory.html');

  })
})