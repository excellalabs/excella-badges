import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Category } from 'src/category/category';

@Entity()
export class SkillLevel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @ManyToOne(() => Category, category => category.capability)
    // category: Category;

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