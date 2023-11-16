import LoginPage from "../../support/page-objects/login-page/login-page";
import AddLocationHelper from '../../support/helpers/add-location-helper';
import AddJopHelper from  '../../support/helpers/add-job-helper'
import  "../../support/Api/utills/add-location-utills";
import  "../../support/Api/utills/add-job-utills";
import EmployeeHelper from "../../support/helpers/add-employee-helper";
import AddReportPage from "../../support/page-objects/addreport-page";

const myLogin:LoginPage = new LoginPage();
const myLocation : AddLocationHelper=new AddLocationHelper();
const myJop : AddJopHelper=new AddJopHelper();
const employeeHelper:EmployeeHelper =new EmployeeHelper();
const report :AddReportPage =new AddReportPage();
 
let JopTitle: any;
let locationId: any;
let jobTitleId: any;
let locationName: any;
let generatedReportName: any; 

describe('OrangeHRM-TimeSheet/Reports', () => {

  beforeEach(function () {

    // Visit the login page
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 
    myLogin.login("Admin", "admin123");
 
    myLocation.addNewLocationViaAPI().then((response) => {
      cy.log(response);
      locationId = response.data.id;
      locationName = response.data.name;

 
      myJop.addNewJopViaAPI().then((response) => {
        jobTitleId = response.data.id;
        JopTitle = response.data.title;

      })
        .then(() => {
           
          for (let i = 0; i < 3; i++) {
            employeeHelper.CreateEmployee(locationId, jobTitleId);

          }

        })
    });
  });

  afterEach(()=> {
     // myLocation.deleteCreatedLocation();
    //  JopTitle.deleteCreatedJop();
  });

  
  it('Generate an Employee report)', () => {
    generatedReportName = report.addReport();  
    console.log(generatedReportName);

    report.SelectionLocation(locationName);
    report.DisplayFieldsPersonal();
    report.DisplayFieldsJop();
    report.DisplayFieldsSalary(generatedReportName);

  
    const arrHeader = ["Personal", "Job", "Salary"];

 
    report.GenricCheckReportFirstHeader(arrHeader);

     report.checkNumberOfRows();


  })
})


