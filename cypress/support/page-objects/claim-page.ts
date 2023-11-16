export default class ClaimsRequest{
    approve(claimId:any){

    cy.log(claimId);
    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim"
      );
      cy.visit(
      `https://opensource-demo.orangehrmlive.com/web/index.php/claim/assignClaim/id/${claimId}`
      );
      cy.get(".orangehrm-sm-button").eq(2).click({ force: true });
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim"
      )}
    
    
    
    
    
      
      reject(claimId:any){
        cy.visit(

            "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim"
            
          );
          cy.visit(
          `https://opensource-demo.orangehrmlive.com/web/index.php/claim/assignClaim/id/${claimId}`
          );
          cy.get(".oxd-button--danger").click({ force: true });
          cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim")
    
      }
    }