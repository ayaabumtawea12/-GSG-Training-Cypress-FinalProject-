import AddLocationInit from "../../support/init/init-location"

const userInit:AddLocationInit= new AddLocationInit;

export const URLs = {
    ADD_LOCATION: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/locations'
}




export default class AddLocation { 
    addNewLocationViaAPI() { 
      const userPayload = AddLocationInit.LocationInit(); 
      return cy.newLocation("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/locations", userPayload).as('CREATED_LOCATION')
    } 
  
    deleteCreatedLocation() {
     cy.get('@CREATED_LOCATION').then((response) => {
         const locationId = Cypress.$(response).find('body').text(); 
         expect(locationId).to.exist; 
         cy.api({
             method: 'DELETE',
             url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/locations",
             body: { "ids": [locationId] }
         }).then((deleteResponse) => {
             expect(deleteResponse).property('status').to.equal(200);
         });
     });
  }
  }
  