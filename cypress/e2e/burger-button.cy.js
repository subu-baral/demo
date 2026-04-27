describe('Product page', () => {
  it('product page should be visible', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get('#user-name').clear().type("standard_user");
    cy.get('#password').clear().type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should('include','/inventory.html');

    cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled').click();
   
    cy.get('#inventory_sidebar_link').should('be.visible').and('have.text', 'All Items').and('have.attr', 'href', '#');
    
    cy.get('#about_sidebar_link').should('be.visible').and('have.text','About').and('have.attr','href','https://saucelabs.com/');
    
    cy.get('#logout_sidebar_link').should('be.visible').and('have.text','Logout').and('have.attr', 'href', '#');

    cy.get('#reset_sidebar_link').should('be.visible').and('have.text','Reset App State').and('have.attr', 'href', '#');
    
    cy.get ('body',{timeout:3000}).type('{esc}');

  })
})