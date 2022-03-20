import { AfterInsert, JoinColumn, OneToOne, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Skill } from '../skill/skill'
import { BadgeType } from '../badgetype/badgetype'
import ImageFile from '../common/imageUpload/imageUpload';

@Entity()
export class Badge {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @JoinColumn({ name: 'iconId' })
    @OneToOne(
      () => ImageFile,
      {
        nullable: true
      }
    )
    public icon?: ImageFile;

    @Column({ nullable: true })
    public iconId?: number;

    @JoinColumn({ name: 'imageId' })
    @OneToOne(
      () => ImageFile,
      {
        nullable: true
      }
    )
    public image?: ImageFile;

    @Column({ nullable: true })
    public imageId?: number;

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