import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Skill } from '../skill/skill';

@Entity()
export class SkillLevel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Skill, skill => skill.skilllevel)
    skill: Skill[];

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