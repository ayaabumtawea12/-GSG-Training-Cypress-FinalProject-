class loginpage{

    elements={
        userName : ()=> cy.getByAttribute('placeholder' ,'Username'),
        password : ()=> cy.getByAttribute('placeholder' ,'Password'),
        loginbtn : () => cy.get('button'),
        forgetbtn: () => cy.getByClass('orangehrm-login-forgot-header'),
        restbtn:()=>cy.getByClass('orangehrm-forgot-password-button--reset'),
        EId :()=>cy.get('.oxd-input--active'),
        EmployeeName:()=> cy.get('.oxd-autocomplete-text-input'),
        SupervisorName: () => cy.get('[placeholder="Type for hints..."]'),
        errorMassage:()=> cy.get('.oxd-alert-content--error'),
        dashbord:()=> cy.get('.oxd-topbar-header-breadcrumb-module'),
        requerd:()=>cy.get('.oxd-input-field-error-message ')
 }
 
 login (userName:string,password:string){
    this.elements.userName().type(userName);
    this.elements.password().type(password);
    this.elements.loginbtn().click()
}

forget(userName:string){
    this.elements.forgetbtn().click();
    this.elements.userName().type(userName);
    this.elements.restbtn().click();
    cy.contains('Reset Password link sent successfully').should('be.visible');

}


clickAblebtn(){
    this.elements.loginbtn().should('be.visible').should('not.be.disabled').click().as('sucsssfully111111');
}
cheaktwoWrong(userName:string, password:string){
    this.elements.userName().type(userName).as('usernameWrong');
    this.elements.password().type(password).as('passwordWrong');
    this.elements.loginbtn().click();

    if(userName !== 'Admin' && password !=='admin123'){
       this.elements.errorMassage().contains('Invalid credentials').as('Successfully222222');

    }


    


}

cheakwrongPass(userName:string, password:string){
    this.elements.userName().type(userName).as('usernameWrong');
     this.elements.password().type(password).as('passwordWrong');
     this.elements.loginbtn().click();
    

    if(userName == 'Admin' && password !=='admin123'){
       this.elements.errorMassage().contains('Invalid credentials').as('Successfully333');

    }


    


}



cheakwrongUser(userName:string, password:string){
     this.elements.userName().type(userName).as('usernameWrong');
    this.elements.password().type(password).as('passwordWrong');
     this.elements.loginbtn().click();
    

    if(userName !== 'Admin' && password =='admin123'){
       this.elements.errorMassage().contains('Invalid credentials').as('Successfully44444');

    }


    


}

cheakcorrect(userName:string, password:string){
    this.elements.userName().type(userName).as('usernameWrong');
    this.elements.password().type(password).as('passwordWrong');
    this.elements.loginbtn().click();
    

    if(userName == 'Admin' && password =='admin123'){
       this.elements.dashbord().contains('Dashboard').as('Successfully55555');
      

    }
}

emptyusername(userName:string, password:string){

this.elements.userName().should('be.empty').as('usernameWrong');
this.elements.password().type(password).as('passwordWrong');
this.elements.loginbtn().click();


if(userName !== 'Admin' && password =='admin123'){
    this.elements.requerd().eq(0).contains('Required').as('Successfully666666');

  

}
}




emptyTwo(userName:string, password:string){

    this.elements.userName().should('be.empty');
    this.elements.password().should('be.empty');
   
    this.elements.loginbtn().click();
    

    if(userName !== 'Admin' && password !=='admin123'){
        this.elements.requerd().contains('Required').as('Successfully7777777');

      

    }
    }

    emptypassword(userName:string, password:string){
        this.elements.userName().type(userName).as('passwordWrong');
        this.elements.password().should('be.empty').as('usernameWrong');
        
        this.elements.loginbtn().click();
        
    
        if(userName == 'Admin' && password !=='admin123'){
            this.elements.requerd().contains('Required').as('Successfully88888');
    
          
    
        }
        }



}
export default loginpage;
