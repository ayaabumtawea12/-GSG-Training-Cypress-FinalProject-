import { AddLocationPayload } from "../../payload/location-payload";
import { AddLocationResponse } from "../../response/location-response";
import { ICreateEmployeePayload } from "../../payload/employee-payload";
import { AddJopPayload } from "../../payload/jop-payload";
import { AddJopResponse } from "../../response/jop-response";
//
import {ICreateEmployeeUser } from "../../payload/addemployee-payload"
import {ICreateUser}from "../../payload/adduser-payload";
import {ICreateEvent} from "../../payload/event-payload";
import {ICreateExpense} from "../../payload/expense-payload";

declare global {
    namespace Cypress {
        interface Chainable {
            newLocation: (requestURL: string, LocationPayload: AddLocationPayload) => Chainable<any>;
            AddEmployee: (requestUrl: string, empPayload : ICreateEmployeePayload) => Chainable<any>;
            addUserEmployees: (requestURL: string, userPayload: ICreateEmployeeUser) => Chainable<any>;
            adduser: (requestURL: string, usersPayload: ICreateUser) => Chainable<any>;
            addEvent: (requestURL: string, eventPayload: ICreateEvent) => Chainable<any>;
            addExpenseTypes: (requestURL: string, expensePayload: ICreateExpense) => Chainable<any>;
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
    return cy.request({
        method: 'POST',
        url: requestUrl,
        body:empPayload, 
        headers: {
            'Content-Type': 'application/json'
        }
    })
});


Cypress.Commands.add('AddEmployee', (requestUrl: string, empPayload: ICreateEmployeePayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: empPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
});
//

Cypress.Commands.add('addUserEmployees', (requestUrl: string, userPayload: ICreateEmployeeUser ) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
});

Cypress.Commands.add('adduser', (requestUrl: string, usersPayload: ICreateUser ) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: usersPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
});


Cypress.Commands.add('addEvent', (requestUrl: string, eventPayload: ICreateEvent ) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: eventPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
});

//
Cypress.Commands.add('addExpenseTypes', (requestUrl: string, expensePayload: ICreateExpense ) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: expensePayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
});
