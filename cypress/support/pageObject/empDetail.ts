class employeeDetail {
     

    elements={ 
    nickName: () => cy.get('.oxd-input'),
    driverLicenseNumber : () => cy.get('.oxd-input'),
    licenseExpiryDate:()=> cy.get('[placeholder="yyyy-mm-dd"]'),
    maritalStatus: ()=>cy.get('.oxd-select-text-input'),
    dateofBirth:()=>cy.get(' [placeholder="yyyy-mm-dd"]'),
    savebtndetails: ()=> cy.get('button[type="submit"]'),
    assertionName:()=> cy.get('.orangehrm-edit-employee-name'),
    
    loading: () => cy.get('.oxd-loading-spinner-container'),
    PIMbtn: () => cy.get('.oxd-sidepanel-body'),
}
 
PersonalDetails(nickName: string, driversLicenseNumber: string, licenseExpiryDate: string, maritalStatus: string, dateOfBirth: string, gender: string) {
   // this.elements.loading().should('not.exist');
    /*
    this.elements.nickName().type(nickName);
    //this.elements.licenseExpiryDate().eq(1).type(licenseExpiryDate);
    //this.elements.maritalStatus().eq(1).type(maritalStatus);
    this.elements.savebtndetails().eq(0).click();
    this.elements.PIMbtn().contains('PIM').click();
    */
    this.elements.nickName().eq(4).type(nickName),
    this.elements.driverLicenseNumber().eq(7).type(driversLicenseNumber),
    this.elements.licenseExpiryDate().eq(0).type(licenseExpiryDate),
    this.elements.maritalStatus().eq(1).click({force: true}),
    this.elements.dateofBirth().eq(1).type(dateOfBirth),
    this.elements.savebtndetails().eq(1).click();


}




}

export default employeeDetail;



