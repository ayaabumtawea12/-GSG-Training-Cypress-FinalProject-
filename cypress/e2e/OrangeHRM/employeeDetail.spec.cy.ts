import loginPage from '../../support/pageObject/loginpage';
import employeeDetail from '../../support/pageObject/empDetail';
import addemployee from '../../support/pageObject/addempobj';
const empDetail:employeeDetail = new employeeDetail();
const loginObj:loginPage = new loginPage();
const empobj:addemployee=new addemployee();
describe('Employee functionality', () => {
     
    beforeEach(()=>{
     // cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('Login Page')
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      loginObj.login("Admin","admin123")
      cy.fixture('employeeinfo').as('EmpInfo');
    })

    it('Add Personal detail', () => {
            cy.get('@EmpInfo').then((info:any)=>{
            empobj.addemployeef(info.FirstName,info.MiddleName,info.LastName,info.UserName,info.Password, info.ConfirmPassword)
            empDetail.PersonalDetails(info.Nickname, info.DriverLicenseNumber, info.LicenseExpiryDate, info.MaritalStatus, info.DateofBirth, info.Gender);
        })

    
       // cy.get('.oxd-text').contains('Aya');
})
        
    
})