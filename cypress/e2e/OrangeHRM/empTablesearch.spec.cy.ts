import searchtable from "../../support/pageObject/emplTable"
import loginPage from "../../support/pageObject/loginpage";
import tablerow from "../../support/pageObject/tablecr";


const loginobj:loginPage = new loginPage();
const search:searchtable = new searchtable();
const checkrow:tablerow = new tablerow();

describe('Employee functionality', () => {
     
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginobj.login("Admin","admin123")
        search.selectPIM()
        cy.fixture('searchtap').as('Empsearch');
   //   cy.fixture('employeeinfo').as('EmpInfo');
    })

    it('search by key value employee', () => {
        cy.get('@Empsearch').then((item:any)=>{
            search.checksearch([{key:"Employee Name",value:item.EmployeeName},{key:"Employee Id",value:item.employeeId}])
         cy.wait(400);
                     checkrow.tablecontentt(['select row', 'Id', 'First (& Middle) Name', 'Last Name', 'Job Title', 'Employment Status', 'Sub Unit', 'Supervisor', 'Actions']);
            checkrow.validationtable(1, 'Id', item.employeeId);
           // checkrow.validationtable(1, 'First (& Middle) Name', `${item.firstName} ${item.middleName}`);
            checkrow.validationtable(1, 'Last Name', item.LastName);
            checkrow.validationtable(1, 'Job Title', item.JobTitle);
            checkrow.validationtable(1, 'Employment Status', item.EmploymentStatus);
            checkrow.validationtable(1, 'Sub Unit', item.SubUnit);
            checkrow.validationtable(1, 'Supervisor', item.Supervisor);
        
        })   
     
          
     
      })
 
   })
        
    
