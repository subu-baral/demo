describe ('Login page', ()=>{
  it.skip('login page should be visible', ()=>{

      // visit the swag lab page
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('eq', 'https://www.saucedemo.com/');
      cy.contains('Swag Labs');

      // placeholders should be visible and clickable
      cy.get('input[name="user-name"]').should('have.attr', 'placeholder', 'Username').click();
      cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password').click();
      cy.get('input[name="login-button"]').should('have.value', 'Login').click();
   })

     //invalid login with incorrect username
  it('Invalid login with incorrect username',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("Tester");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

      // Invalid login with incorrect username and password
  it('Invalid username and paswword',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("Tester");
      cy.get('#password').clear().type("TESTEETR");
      cy.get('#login-button').click();
      cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

      // Login with locked_out_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("locked_out_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
 })

       // Login with problem_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("problem_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
  })

      // Login with performance_glitch_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("performance_glitch_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
})   

      // Login with error_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("error_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
  })

      // Login with error_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("visual_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
  })
      // Valid login with standard user
  it.only('Valid login with standard user with valid password',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('eq', 'https://www.saucedemo.com/');
      cy.get('#user-name').clear().type("standard_user");
      cy.get('#password').clear().type("secret_sauce");
      cy.get('#login-button').click();
      cy.url().should('include','/inventory.html');
      cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
      cy.contains('Swag Labs');
      cy.get('#shopping_cart_container').should('be.visible');
      cy.get('.title').should('have.text', 'Products');
      cy.get('select[data-test="product-sort-container"]').should('be.enabled').and('be.visible');
      
      //Items should be visible
      cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Backpack'); 
      cy.get('#item_4_title_link').should('be.visible');
      cy.get('div[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
      cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99');
      cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible');

      cy.get('div[data-test="inventory-item-name"]').eq(3).should('have.text','Sauce Labs Fleece Jacket');
      cy.get('#item_5_title_link').should('be.visible');
      cy.get('div[data-test="inventory-item-desc"]').should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
      cy.get('div[data-test="inventory-item-price"]').should('contain','$49.99');
      cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('be.visible');

      //scroll down
      cy.scrollTo('bottom');
      cy.get('.footer').should('be.visible');
      
      // Logout
      cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').should('be.visible');
      cy.get('#logout_sidebar_link').should('have.text','Logout').should('have.attr', 'href', '#').click();
      cy.url().should('include','saucedemo.com'); 
  })
})