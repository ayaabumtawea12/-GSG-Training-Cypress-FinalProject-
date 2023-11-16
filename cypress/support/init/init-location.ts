import {AddLocationPayload} from '../../support/payload/location-payload';
import { faker } from '@faker-js/faker';


export default class AddLocationInit {
    static LocationInit(): AddLocationPayload {
        let createLocationPayload:AddLocationPayload={ 
       
            name: faker.company.name(),
            countryCode: faker.address.countryCode()
        }
        
        return createLocationPayload;

    }
}
 