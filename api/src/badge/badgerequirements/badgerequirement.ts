import { AfterInsert, JoinColumn, OneToOne, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Badge } from '../../badge/badge'

@Entity()
export class BadgeRequirement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Badge,  badge => badge.requirements)
    @JoinColumn()
    badge: Badge;

    @AfterInsert()
    logEvent() {
        console.log("New skill level created: ", this.name)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Updated skill level with id: ",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("Removed skill level ", this.name)
    }
}