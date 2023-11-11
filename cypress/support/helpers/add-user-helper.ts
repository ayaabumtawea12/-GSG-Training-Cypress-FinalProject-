import GenericfunctionHelper from "../../support/page-objects/generic-page/generic-page"
import employeeInit from "../../support/init/init-user";



class AddEmployeeUser{
 
    
    urls = {
        employees:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        users:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
    }

//
addEmployeeUser(data:any) {
    const userPayload = employeeInit.initEmployee(data)
    return cy.addUserEmployees(this.urls.employees, userPayload).as('CREATED_EMPLOYEE-USER');
  }





addEmployeeWithLogin = (data:any) => {  
    return this.addEmployeeUser(data).then((res) => {
      data.username = `Aya${GenericfunctionHelper.genericRandomString()}`;
      cy.log(data.username).as('usernameee')
      cy.writeFile('../../fixtures/employeeInfo', JSON.stringify(data));
  
          cy.api({
            method: 'POST',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
            body:{
                username:data.username,
                password:data.password,
                status: true,
                userRoleId: 2,
                empNumber: res.body.data.empNumber
            }
        }).its('body');
    })
}

 
deleteemployee(empNumberr:any){
cy.log(empNumberr).as("weeeeeeeeeeeeeeeeeeeeee")
cy.api({
    method: 'DELETE',
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
body:{ 
  ids: [empNumberr]
}

}).then((deleteResponse) => {
    expect(deleteResponse).property('status').to.equal(200);
});
  
}
      
}

export default AddEmployeeUser