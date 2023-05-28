import { Address } from "./address.model";

export class User {
    userId!: number;
    firstName!: string;
    lastName!: string;
    phoneNumber!: number;
    role!: string;
    password!: string;
    studentNumber!:number
    address!: Address
}