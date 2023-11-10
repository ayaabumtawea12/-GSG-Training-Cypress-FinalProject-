class tablerow{
//array contain names columns in table
     tablecontent: Array<string> = new Array;
   
      tablecontentt(table:Array<string>){
        this.tablecontent = table;
    }
 
    validationtable(row:number,columnname:string,expecteddata:string){
 
        let index = this.tablecontent.indexOf(columnname);
        return cy.get(`div.oxd-table-body > div:nth-child(${row}) > div > div:nth-child(${index+1})`).should('have.text',expecteddata);
 }

}
export default tablerow;
