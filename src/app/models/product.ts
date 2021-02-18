import { UserNexos } from "./user-nexos";

export class Product{
    id: number;
    name: string;
    amount: number;
    userId: UserNexos;
    entryDate: Date;
    modificationDate: Date;

    constructor( id: number, name: string, amount: number, userId: UserNexos, entryDate: Date, modificationDate: Date){
        this.id = id
        this.name = name
        this.amount = amount
        this.userId = userId
        this.entryDate = entryDate
        this.modificationDate = modificationDate
    }
}