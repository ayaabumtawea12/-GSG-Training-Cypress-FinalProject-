import {ICreateEmployeeUser} from "../../support/payload/addemployee-payload"
import GenericfunctionHelper from "../../support/page-objects/generic-page/generic-page";



export default class employeeInit {
    static initEmployee(data:any): ICreateEmployeeUser {
        let createEmployeeUserPayload: ICreateEmployeeUser = {

           
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
            employeeId:`${GenericfunctionHelper.genericRandomString()}`

        }

        return createEmployeeUserPayload;
    }
}
//