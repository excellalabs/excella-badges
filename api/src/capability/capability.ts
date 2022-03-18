import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Category } from 'src/category/category';

@Entity()
export class Capability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @ManyToOne(() => Category, category => category.capability)
    // category: Category;

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