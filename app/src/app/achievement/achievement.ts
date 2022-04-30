import { Badge } from "../badge/badge";
import { User } from "../user/user";

export class Achievement {
    id?: number;
    user: User;
    badge: Badge;
    assignmentDate?: Date;
    achievementDate?: Date;

    constructor(id: number, user: User, badge: Badge, assignmentDate: Date, achievementDate: Date){
        this.id = id
        this.user = user
        this.badge = badge
        this.assignmentDate = assignmentDate
        this.achievementDate = achievementDate
    }
}

export class AchievementDto {
    id?: number;
    user: number;
    badge: number;
    assignmentDate?: Date;
    achievementDate?: Date;

    constructor(id: number, user: number, badge: number, assignmentDate: Date, achievementDate: Date){
        this.id = id
        this.user = user
        this.badge = badge
        this.assignmentDate = assignmentDate
        this.achievementDate = achievementDate
    }
}
