import loginpage from "../../support/pageObject/login";
const loginObj : loginpage=new loginpage;


describe('forget_pass', () => {

    beforeEach(() => {
      cy.intercept('/web/index.php/dashboard/index').as('Login');
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.fixture('login').as('Log');
    });
  
  // test 1
    it('click able button', () => {
     loginObj.clickAblebtn();
    });
  // test 2
    it('wrong password and wrong username', () => {
        cy.get('@Log').then((infoData:any)=>{
       
        loginObj.cheaktwoWrong(infoData[0].userName,infoData[0].password);
       });
     
   
    })

 //test 3

     it('wrong password and valid username', () => {
        cy.get('@Log').then((infoData:any)=>{
       
        loginObj.cheakwrongPass(infoData[1].userName,infoData[1].password);
       });
     
   
    })

   //  test 4
     it('valid password and wrong username', () => {
     cy.get('@Log').then((infoData:any)=>{
       
        loginObj.cheakwrongUser(infoData[2].userName,infoData[2].password);
        });
     
   
      })

      it('correct', () => {
        cy.get('@Log').then((infoData:any)=>{
       
         loginObj.cheakcorrect(infoData[3].userName,infoData[3].password);
         });
     
   
       })


      it('empty user name', () => {
        cy.get('@Log').then((infoData:any)=>{
       
        loginObj.emptyusername(infoData[4].userName,infoData[4].password);
        });
     
   
      })
      it('empty user name and empty password' , () => {
        cy.get('@Log').then((infoData:any)=>{
       
        loginObj.emptyTwo(infoData[5].userName,infoData[5].password);
        });
     
   
      })


      it('empty password' , () => {
        cy.get('@Log').then((infoData:any)=>{
       
        loginObj.emptypassword(infoData[6].userName,infoData[6].password);
        });
     
   
      })





  });