import {ICreateEmployeePayload} from "../payload/employee-payload"

import { faker } from '@faker-js/faker';
 
export default class employeeInit {
    static initEmployee(): ICreateEmployeePayload {
        let createEmployeePayload: ICreateEmployeePayload = {
            employeeId: faker.random.alphaNumeric(10), // Generate a random string
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            middleName: faker.name.firstName(),
           
        }


        
        
        return createEmployeePayload;
    }
}
