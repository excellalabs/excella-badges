import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Capability } from 'src/capability/capability';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Capability, capability => capability.category)
    capability: Capability[];

    @AfterInsert()
    logEvent() {
        console.log("New category created: ", this.name)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Updated category with id: ",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("Removed category ", this.name)
    }
}