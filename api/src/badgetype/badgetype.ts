import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Badge } from 'src/badge/badge';

@Entity()
export class BadgeType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Badge, badge => badge.badgeType)
    badge: Badge[];

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