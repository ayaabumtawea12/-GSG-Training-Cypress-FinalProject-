import { AddJopPayload } from "../../payload/jop-payload";
import { AddJopResponse } from "../../response/jop-response";

  declare global {
    namespace Cypress {
        interface Chainable {
            newJop: (requestURL: string, JopPayload: AddJopPayload) => Chainable<any>;
        }
    }
}



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
