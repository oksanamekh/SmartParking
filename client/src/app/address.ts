import { Parking } from './parking';

export class Address{
    id: number;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    parkingsDto: Parking[];
}