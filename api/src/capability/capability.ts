import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Skill } from 'src/skill/skill';

@Entity()
export class Capability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Skill, skill => skill.capability)
    skill: Skill[];

    @AfterInsert()
    logEvent() {
        console.log("New capability created: ", this.name)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Updated capability with id: ",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("Removed capability ", this.name)
    }
}