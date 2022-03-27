import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToOne, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Capability } from '../capability/capability';
import { SkillLevel } from '../skilllevel/skilllevel';
import { Badge } from '../badge/badge';

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Capability,  capability => capability.skill)
    capability: Capability;

    @ManyToOne(() => SkillLevel,  skilllevel => skilllevel.skill)
    skilllevel: SkillLevel;

    @OneToMany(() => Badge, badge => badge.skill)
    badge: Badge[];

    @AfterInsert()
    logEvent() {
        console.log("New skill created: ", this.name)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Updated skill with id: ",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("Removed skill level ", this.name)
    }
}