import {ICreateEvent} from "../../support/payload/event-payload"
import GenericfunctionHelper from "../../support/page-objects/generic-page/generic-page";
import{ICreateExpense} from "../../support/payload/expense-payload"





export default class expanseInit {
    static initExpanse(data:any):ICreateExpense {
        const name = `aya${GenericfunctionHelper.genericRandomString()}`;
        let createEepansePayload: ICreateExpense = {
            description:data.Cliam.description,
            name:name,
           
            }

        return createEepansePayload;
    }
}