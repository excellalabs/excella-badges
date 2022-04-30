//badge contains the blob for the icon and image.  These are used in the badge service to call the api to create the images
import { Skill } from "../skill/skill";
import { BadgeType } from '../badgetype/badgetype';

export class Badge {
    id?: number;
    name?: string;
    icon?: string;
    image?: string;
    skill?: number;
    badgeType?: number;

    iconBlob?: any;
    imageBlob?: any;

    constructor(id: number, name: string, skill :number, badgeType: number, icon: any, image: any){
        this.id = id
        this.name = name
        this.icon = icon
        this.image = image
        this.skill = skill
        this.badgeType = badgeType
    }
}

//badgedto uses the name of the icon and image for updating the badge object
export class BadgeDto {
    id?: number;
    name: string;
    icon?: string;
    image?: string;
    skill?: number;
    badgeType?: number

    constructor(id: number, name: string, skill: number, badgeType: number, icon: any, image: any){
        this.id = id
        this.name = name
        this.icon = icon
        this.image = image
        this.skill = skill
        this.badgeType = badgeType
    }
}