import { JobTitle } from "./job-title";

export class UserNexos {
    id:number;
    name: string;
    idCargo: JobTitle; 
    entryDate: Date;
    age: number;

    constructor(id:number, name: string, idCargo: JobTitle, entryDate: Date, age: number){
        this.id = id
        this.name = name
        this.idCargo = idCargo
        this.entryDate = entryDate
        this.age = age
    }
}
