class addemployee {
    elements = {
        // userName: () => cy.get('[placeholder="Username"]'),
        PIMbtn:()=> cy.get('.oxd-sidepanel-body'),

        addEmp: ()=> cy.get('.oxd-button--secondary'),

        employeeId: () => cy.get('.oxd-input--active'),

        EmployeeInput:()=>cy.get('.--name-grouped-field'),

        loginswitch:()=> cy.get('.oxd-switch-input'),
        userName:()=>cy.get('.oxd-input'),
        password: ()=>cy.get('input[type="password"]'),

        saveBtn: () => cy.get('button[type="submit"]'),
        assertionName:()=> cy.get('.orangehrm-edit-employee-name'),
        resultofadding: () => cy.get('.oxd-toast'),
      //  dateInput: () => cy.get('[placeholder="yyyy-mm-dd"]'),
 
      //  personaldetail:() => cy.get('.orangehrm-tabs-item > :nth-child(1)'),
        
      // selectIcon:()=>cy.get('.oxd-select-text--arrow')



     }
    
    addemployeef(firstName: string,middleName:string, lastName: string,userName:string,password:string,confirmmpassw:string) {
        this.elements.PIMbtn().contains('PIM').click();
        this.elements.addEmp().eq(1).click();
        this.elements.EmployeeInput().children().eq(0).type(firstName);
        this.elements.EmployeeInput().children().eq(1).type(middleName);
        this.elements.EmployeeInput().children().eq(2).type(lastName);
        this.elements.loginswitch().click();
        this.elements.userName().eq(5).type(userName);
        this.elements.password().eq(0).type(password);
        this.elements.password().eq(1).type(confirmmpassw);

        //this.elements.EmpInunder().children().eq(2).type(firstName);
        this.elements.saveBtn().click();
        this.elements.resultofadding().contains('Successfully Saved');
        this.elements. assertionName().contains(firstName+' '+lastName).as('assertDone');
    //   this.elements.dateInput().click().type(Cypress.moment().format('MMM DD, YYYY'));
     //  this.elements.selectIcon().eq(0).click() 
       //.select('Single').should('have.value','Single');
    }
}

export default addemployee;