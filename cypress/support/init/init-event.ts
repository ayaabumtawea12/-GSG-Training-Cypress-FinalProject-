import {ICreateEvent} from "../../support/payload/event-payload"
import GenericfunctionHelper from "../../support/page-objects/generic-page/generic-page";
import{ICreateExpense} from "../../support/payload/expense-payload"





export default class eventInit {
    static initEvent(data:any):ICreateEvent {
        const name = `aya${GenericfunctionHelper.genericRandomString()}`;
        let createEventPayload: ICreateEvent = {

           
            description:data.Event.description,

            name:name,
            
            status:data.Event.status,
            }

        return createEventPayload;
    }




 
        static initExpense(data:any):ICreateExpense {
            const namee = `aya${GenericfunctionHelper.genericRandomString()}`;
            let createExpensePayload:ICreateExpense = {
                
               
                description:data.Expens.description,
    
                name:namee,
                
            //    status:data.Expens.status,
                }
    
            return createExpensePayload;
        
            }
        }




