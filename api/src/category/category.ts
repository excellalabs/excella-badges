import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

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