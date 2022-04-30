export class BadgeType {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

export class BadgeTypeDto {
    id?: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}