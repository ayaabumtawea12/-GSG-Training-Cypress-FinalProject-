import employeeInit from "../../support/init/init-employee";

import { faker } from '@faker-js/faker';
 
export default class EmployeeHelper{


    
CreateEmployee(locationIds:any, jobTitleIds:any){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
        const empPayload = employeeInit.initEmployee();
        
        return cy.AddEmployee("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees", empPayload).then((response) => {
         //   const empNumber =response.body.data.empNumber;
           cy.api({
                method: 'PUT',
                url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${response.body.data.empNumber}/job-details`,
                body:{
                    jobTitleId:jobTitleIds,
                    joinedDate:null,
                    locationId:locationIds,
                }, 
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            cy.api({
                method: 'POST',
                url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${response.body.data.empNumber}/salary-components`,
             body:{
                   // addDirectDeposit:false,
                   //coment:null,
                    currencyId: faker.finance.currencyCode(),
                    
                     salaryAmount: (Math.floor(Math.random() * (60000 - 50000 + 1)) + 100000).toString(),
                     salaryComponent: faker.random.word(),

                }, 
                headers: {
                    'Content-Type': 'application/json'
                }

            })
        })

        
      
    }
}
