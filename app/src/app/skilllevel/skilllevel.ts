export class Skilllevel {
    id: number;
    name: string;
    logEvent: any;
    logUpdate: any;
    logRemove: any;
    skill: any;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}
