export class Skilllevel {
    id?: number;
    name?: string;

    constructor(id?: number, name?: string){
        this.id = id
        this.name = name
    }
}

export class SkilllevelDto {
    id?: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}