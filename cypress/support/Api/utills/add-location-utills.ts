import { AddLocationPayload } from "../../payload/location-payload";
import { AddLocationResponse } from "../../response/location-response";
import { ICreateEmployeePayload } from "../../payload/employee-payload";
import { AddJopPayload } from "../../payload/jop-payload";
import { AddJopResponse } from "../../response/jop-response";

  declare global {
    namespace Cypress {
        interface Chainable {
            newLocation: (requestURL: string, LocationPayload: AddLocationPayload) => Chainable<any>;
         //   newJop: (requestURL: string, JopPayload: AddJopPayload) => Chainable<any>;
            AddEmployee: (requestUrl: string, empPayload : ICreateEmployeePayload) => Chainable<any>;
        }
    }
}

Cypress.Commands.add('newLocation', (requestURL: string,  LocationPayload: AddLocationPayload) => {
    return cy.api(
        {
            method: 'POST',
            url: requestURL,
            body: LocationPayload,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).its('body');
});

/*
Cypress.Commands.add('newJop', (requestURL: string,  JopPayload: AddJopPayload) => {
    return cy.api(
        {
            method: 'POST',
            url: requestURL,
            body: JopPayload,
            headers: {
                'Content-Type': 'application/json',
             
             },
         }
    ).its('body');
});
*/


Cypress.Commands.add('AddEmployee', (requestUrl:string, empPayload: ICreateEmployeePayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body:empPayload, 
        headers: {
            'Content-Type': 'application/json'
        }
    })
});


 