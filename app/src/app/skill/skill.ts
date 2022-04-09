import { Skilllevel } from '../skilllevel/skilllevel';
import { Capability } from '../capability/capability';

export class Skill {
    id?: number;
    name?: string;
    capability?: Capability;
    skilllevel?: Skilllevel;

    constructor(id: number, name: string, capability: Capability, skilllevel: Skilllevel){
        this.id = id
        this.name = name
        this.capability = capability
        this.skilllevel = skilllevel
    }
}

export class SkillDto {
    id?: number;
    name: string;
    capability: number;
    skilllevel: number;

    constructor(id: number, name: string, capability: number, skilllevel: number){
        this.id = id
        this.name = name
        this.capability = capability
        this.skilllevel = skilllevel
    }
}
