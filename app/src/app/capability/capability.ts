export class Capability {
    id?: number;
    name?: string;

    constructor(id?: number, name?: string){
        this.id = id
        this.name = name
    }
}

export class CapabilityDto {
    id?: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}