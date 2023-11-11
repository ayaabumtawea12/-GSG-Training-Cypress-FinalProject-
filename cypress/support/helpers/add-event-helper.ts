import employeeInit from "../../support/init/init-user";
import eventInit from "../../support/init/init-event";
import expanseInit from "../../support/init/init-expense"

let id:any

class AddEventfunction{
 
    
    urls = {
       event:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/events',
       claim:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests'
       
    }


 addEvent(data:any) {
    const eventPayload = eventInit.initEvent(data)
    return cy.addEvent(this.urls.event, eventPayload).as('CREATED_EVENT');
  }


  deleteEvent(eventId:any){
    cy.api({
        method: 'DELETE',
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/events",
    body:{ 
      ids: [eventId]
    }
    }).then((deleteResponse) => {
        expect(deleteResponse).property('status').to.equal(200);
    });
  }
 
  addExpenseTypes(data:any){
    const addExpenseTypes=expanseInit.initExpanse(data)
    return cy.addExpenseTypes("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/expenses/types", addExpenseTypes).as('CREATED_EVENT');
  }


  
  
deteteExpense(expenseId:any){
     
  cy.api({
      method: 'DELETE',
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/expenses/types",
  body:{ 
    ids: [expenseId]
  }
  
  }).then((deleteResponse) => {
      expect(deleteResponse).property('status').to.equal(200);
  });

}



  addClaimUserEvent(data:any,eventId:any) {
    cy.log(eventId)
   return cy.api({
      method: 'POST',
      url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests",
      body:{

          claimEventId:eventId,
          currencyId:data.Cliam.currencyId,
          remarks:data.Cliam.remarks
        
      },
      headers: {
        'Content-Type': 'application/json'
    }
  })
 
  }

  addClaimUserExpense(data:any,expenseId:any,claimId:any,) {
     
  cy.log(claimId).as('claimId')

      cy.api({
    
        method: 'POST',
        url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests/${claimId}/expenses`,
        
     
        body:{
  
           amount:data.ExpenseUser.amount,
           date:data.ExpenseUser.date,
           expenseTypeId:expenseId,
            note:data.ExpenseUser.note,
          
        }
    }).then((res)=>{

       id=res.body.data.id;
       cy.log(id).as("weeeeeeeeee")

    })
  }


/*
  deteteClaimUserEvent(claimId:any,id:any){
    cy.log(claimId).as("taaaaaaaaaaaaaaaaa")
   cy.api({
       method: 'DELETE',
       url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests/${claimId}/expenses`,
   body:{ 
     ids: [id]
   }
   
   }).then((deleteResponse) => {
       expect(deleteResponse).property('status').to.equal(200);
   });
 
 }
*/


















  submit(claimId:any){
    cy.api({
      method:'PUT',
      url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests/${claimId}/action`,
      body:{
        action:'SUBMIT'
      }
    })
  }

 

    }
 
export default AddEventfunction;