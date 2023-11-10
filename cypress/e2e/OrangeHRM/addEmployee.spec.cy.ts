import loginPage  from "../../support/pageObject/loginpage";
import addemployee from "../../support/pageObject/addempobj";
 
const loginObj:loginPage=new loginPage();
const empobj:addemployee=new addemployee();
describe('Employee functionality', () => {
     
    beforeEach(()=>{
     // cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('Login Page')
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      loginObj.login("Admin","admin123")
      cy.fixture('addempinfo').as('EmpInfo');
    })

    it('Add New Employee', () => {
      //  cy.get('.oxd-sidepanel-body').contains('PIM').click();
       //cy.get('[placeholder="Password"]').('admin123')
      empobj.addemployeef("Aya","H","Abu mtawea","aya889","asd123456789","asd123456789")
       
      cy.get('@EmpInfo').then((info:any)=>{
     //   empobj.addemployeef(info.FirstName,info.MiddleName,info.LastName,info.UserName,info.Password, info.ConfirmPassword)
    /*
     empobj.elements.employeeId().eq(0).then(($el) => {
       const t=$el.val();
       info.employeeId = t
      cy.request({
          method: "POST",
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
          body: {
              lastName: info.lastName,
              firstName: info.firstName,
              middleName: info.middleName,
              employeeId: info.employeeId,
          },
      }).then((res) => {
        info.empNumber = res.body.data.empNumber;
          // updating empInfo to have empNumber
          cy.writeFile('../../fixtures/addempinfo.json', JSON.stringify(info));
      })

  });
    })
      */

 
});
});




});
