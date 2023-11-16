import LoginPage from "../../support/page-objects/login-page/login-page";
import AddEmployeeUser from "../../support/helpers/add-user-helper";
import "../../support/Api/utills/utills-page";
import AddEventfunction from "../../support/helpers/add-event-helper";
import ClaimsRequest from "../../support/page-objects/claim-page"
 
const event=new AddEventfunction();
const myLogin:LoginPage = new LoginPage();
const employeeUser = new AddEmployeeUser();
const  request= new ClaimsRequest();

let eventId:any;
let eventName:any;
let  expenseId :any;
let  expenseName:any;
//let  userId:any;
let claimId:any;
let empNumberr:any;
let employeeId:any;


describe('add claim to new Employee', () => {
  beforeEach(() => {


    // Visit the login page
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Log in as Admin
    myLogin.login("Admin", "admin123");
    cy.fixture("employeeInfo").as("empInfo");
    cy.get('@empInfo').then((empData: any) => {
   
    event.addEvent(empData).then((response) => {
      eventId = response.body.data.id;
      eventName = response.body.data.name;
     
    })

    event.addExpenseTypes(empData).then((response) => {
      expenseId = response.body.data.id;
      expenseName = response.body.data.name;
     }).then(() => {
      employeeUser.addEmployeeWithLogin(empData).then((response) => {
      empNumberr=response.data.employee.empNumber;
    

      }).as('ss').then(() => {

        myLogin.logoutt();
        


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        myLogin.login(empData.username, empData.password);


      }).then(() => {
        event.addClaimUserEvent(empData, eventId).then((response) => {
          claimId = response.body.data.id;
 


        }).then(() => {
          event.addClaimUserExpense(empData,expenseId, claimId)
          console.log(expenseId)
           //let id = response.body.data.id;
        }).then(()=>{
          event.submit( claimId)
        })

      })

    })

  })

myLogin.logoutt();
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
myLogin.login("Admin", "admin123");

})
  afterEach(() => { 
   
    
    employeeUser.deleteemployee(empNumberr);
    event.deleteEvent(eventId);
    event.deteteExpense(expenseId);
    // event.deteteClaimUserEvent(claimId,eventId)
    })

it('add claim and tnen approve', () => {
      request.approve(claimId);


});

it('add claim and tnen  reject', () => {
     
request.reject(claimId);

  
});









})


 
//

