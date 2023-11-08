
class LoginPage {
    elements = {
        // userName: () => cy.get('[placeholder="Username"]'),
        userName: () => cy.get('[placeholder="Username"]'),

        // password: () => cy.get('[placeholder="Password"]'),
        password: () => cy.get('[placeholder="Password"]'),

        loginBtn: () => cy.get('button')
    }
    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
       // cy.get('.oxd-topbar-header-breadcrumb-module').should('contain','Dashboard');
    }


    logout = () => {
        return cy.api('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',{})
    }



}

export default LoginPage;