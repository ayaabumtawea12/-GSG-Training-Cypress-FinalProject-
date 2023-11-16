import AddJopInit from "../../support/init/init-job"

export const URLs = {
    ADD_JOP: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles'
}




export default class AddJob { 
    addNewJopViaAPI() { 
      const jopPayload = AddJopInit.JopInit(); 
      return cy.newJop("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles", jopPayload).as('CREATED_JOP')
    } 
  
    deleteCreatedJop() {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle', { timeout: 30000 });
     cy.get('@CREATED_JOP').then((response) => {
         const jopId = Cypress.$(response).find('body').text(); // Assuming locationId is present in the response body
         expect(jopId).to.exist; // Make sure locationId exists
  
         cy.request({
             method: 'DELETE',
             url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles",
             body: { "ids": [jopId] }
         }).then((deleteResponse) => {
             expect(deleteResponse).property('status').to.equal(200);
         });
     });
  }
}