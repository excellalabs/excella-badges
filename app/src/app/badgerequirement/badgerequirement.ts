import { Badge } from "../badge/badge";

export class BadgeRequirement {
    id?: number;
    name?: string;
    description?: string;
    badge?: Badge;

    constructor(id: number, name: string, description: string, badge: Badge){
        this.id = id
        this.name = name
        this.description = description
        this.badge = badge
    }
}

export class BadgeRequirementDto {
    id?: number;
    name: string;
    description?: string;
    badge?: number;

    constructor(id: number, name: string, description: string, badge: number){
        this.id = id
        this.name = name
        this.description = description
        this.badge = badge
    }
}
