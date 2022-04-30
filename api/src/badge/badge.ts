import { AfterInsert, JoinColumn, OneToOne, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Skill } from '../skill/skill'
import { BadgeType } from '../badgetype/badgetype'
import { BadgeRequirement } from './badgerequirements/badgerequirement';

@Entity()
export class Badge {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    public icon?: string;

    @Column({ nullable: true })
    public image?: string;

    @OneToMany(() => BadgeRequirement, requirement => requirement.badge, { eager: true })
    requirements: BadgeRequirement[];

    @ManyToOne(() => Skill,  skill => skill.badge)
    skill: Skill;

    @ManyToOne(() => BadgeType,  badgeType => badgeType.badge)
    badgeType: BadgeType;

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