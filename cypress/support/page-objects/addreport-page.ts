import { faker } from '@faker-js/faker';

export default class AddReportPage {
  elements = {
    PIM: () => cy.get(".oxd-main-menu").contains("PIM"),
    Reports: () => cy.get(".oxd-topbar-body-nav-tab-item").contains("Reports"),
    AddReports: () => cy.get(".oxd-button").contains("Add"),
    ReportName: () => cy.get(".oxd-input--active").eq(0),
    SelectionCriteria: () => cy.get(".oxd-select-text--active").eq(2),
    SelectDropdown: () => cy.get(".oxd-select-dropdown").contains("Job Title"),
    Pluse: () => cy.get(" .oxd-icon-button").eq(2),
    Include: () => cy.get(" .oxd-select-text--after > .oxd-icon").eq(3),
    IncludeDropdown: () => cy.get(".oxd-select-dropdown"),
    SelectLocation: () => cy.get(" .oxd-select-text-input").eq(0),
    LocationDropdown: () => cy.get(".oxd-select-dropdown").contains("Location"),
    LocationButton: () => cy.get(" .oxd-icon-button").eq(2),
    SelectDisplayFieldGroup: () => cy.get(" .oxd-select-text--after > .oxd-icon").eq(2),
    Location2Dropdown: () => cy.get(".oxd-select-dropdown"),
    SelectDisplayField: () => cy.get("  .oxd-select-text-input").eq(3),
    SelectPersonal: () => cy.get(".oxd-select-dropdown").contains("Personal"),
    SelectDisplayField2: () => cy.get("  .oxd-select-text-input").eq(4),
    EmployeeFirstName: () => cy.get(".oxd-select-dropdown").contains("Employee First Name"),
    Button5: () => cy.get(" .oxd-icon-button").eq(4),
    switch: () => cy.get(" .oxd-switch-input").eq(0),
    DisplayFieldsJopSelect: () => cy.get("  .oxd-select-text-input").eq(3),
    DisplayFieldsJopDropdown: () => cy.get(".oxd-select-dropdown").contains("Job"),
    DisplayFieldsJopSelectInput: () => cy.get("  .oxd-select-text-input").eq(4),
    DisplayFieldsJopDropdown2: () => cy.get(".oxd-select-dropdown").contains("Job Title"),
    DisplayFieldsJopButton: () => cy.get(" .oxd-icon-button").eq(4),
    DisplayFieldsSwitch: () => cy.get(" .oxd-switch-input").eq(1),
    SalarySelect: () => cy.get("  .oxd-select-text-input").eq(3),
    SalaryDropdown: () => cy.get(".oxd-select-dropdown").contains("Salary"),
    SalaryTextInput: () => cy.get("  .oxd-select-text-input").eq(4),
    SalaryDropdown2: () => cy.get(".oxd-select-dropdown").contains("Amount"),
    SalaryButton: () => cy.get(" .oxd-icon-button").eq(4),
    SalarySwitch: () => cy.get(" .oxd-switch-input").eq(2),





  }


  addReport = () => {
    this.elements.PIM().click({ force: true });
    this.elements.Reports().click();
    this.elements.AddReports().click();
    
    const generatedReportName = faker.random.word();
    this.elements.ReportName().type(generatedReportName);
   
    this.elements.ReportName().type(generatedReportName);

    return generatedReportName;



  }

  SelectionJop = (JopTitle: string) => {
    this.elements.SelectionCriteria().click({ force: true });
    this.elements.SelectDropdown().contains("Job Title").click();
    this.elements.Pluse().click();
    this.elements.Include().click();
    this.elements.IncludeDropdown().contains(JopTitle).click();

  }


  SelectionLocation = (locationName: string) => {
    this.elements.SelectLocation().click({ force: true });
    this.elements.LocationDropdown().click();
    // pluse inside location
    this.elements.LocationButton().click();
    this.elements.SelectDisplayFieldGroup().click();
    // pre requesit 
    this.elements.Location2Dropdown().contains(locationName).click();


  }

  DisplayFieldsPersonal = () => {
    this.elements.SelectDisplayField().click({ force: true });
    this.elements.SelectPersonal().click();
    this.elements.SelectDisplayField2().click({ force: true });
    this.elements.EmployeeFirstName().click();
    this.elements.Button5().click();
    this.elements.switch().click();

  }
  DisplayFieldsJop = () => {
    this.elements.DisplayFieldsJopSelect().click({ force: true });
    this.elements.DisplayFieldsJopDropdown().click();
    this.elements.DisplayFieldsJopSelectInput().click({ force: true });
    this.elements.DisplayFieldsJopDropdown2().click();
    this.elements.DisplayFieldsJopButton().click();
    this.elements.DisplayFieldsSwitch().click();

  }
  DisplayFieldsSalary = (generatedReportName: string) => {
    this.elements.SalarySelect().click({ force: true });
    this.elements.SalaryDropdown().click();
    this.elements.SalaryTextInput().click({ force: true });
    this.elements.SalaryDropdown2().click();
    this.elements.SalaryButton().click();
    this.elements.SalarySwitch().click();
    //
    cy.get(".oxd-button--secondary").click({ force: true });

    cy.get(".oxd-toast").should("exist");
    cy.get(".oxd-toast").should("not.exist", { setTimeout: 10000 });

    let v = generatedReportName;


    cy.get(".oxd-text--h6").eq(1).should("contain", generatedReportName);

  }

  GenricCheckReportFirstHeader(expectValue: any[]) {
    cy.get(".header-wrapper")
      .find(".group-rgRow")
      .each((elem) => {
        cy.wrap(elem)
          //.find(".rgHeaderCell")
          .each((cell, cellIndex) => {
            cy.wrap(cell)
              .invoke("text")
              .should("contain", expectValue[cellIndex]);
          });
      });
  }

  checkNumberOfRows() {
    cy.get(".content-wrapper")
      .find(".rgRow")
      .then((row) => {
        expect(row.length).to.equal(3);
        // cy.log(${row.length} number rows);
      });
  }

/*
  ValidateTableValues(arr: any[][]) {
    let i = 1;
    cy.get(".content-wrapper")
      .find(".rgRow")
      .each(($row, rowIndex) => {
        cy.wrap($row)
          .find(".rgCell")
          .each(($cell, cellIndex) => {
            cy.log(`${i++} number row`);
            cy.wrap($cell)
              .invoke("text")
              .should("contain", arr[rowIndex][cellIndex]);
          });
      });
      
  }
  */
}

