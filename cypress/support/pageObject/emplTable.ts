import Kayval from '../../e2e/interfaces/interKay';
class searchtable{

    elements={
        mainMenuItems: () => cy.get('.oxd-main-menu'),
       Empid:()=>cy.get(' :nth-child(2) > .oxd-input'),
       searchbtn :()=> cy.get('.orangehrm-left-space')

    }


    selectPIM() {
        this.elements.mainMenuItems().contains('PIM').click();
   }



  checksearch(arr:Kayval[])
  {
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i].key == "Employee Id")
        {
            this.elements.Empid().type(arr[i].value)
        }
    }

    this.elements.searchbtn().click({force: true});

  }








}

export default searchtable;