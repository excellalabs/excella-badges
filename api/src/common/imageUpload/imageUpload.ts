import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class ImageFile {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  filename: string;
 
  //for sqllite (type = 'blob')
  //for postgres (type = 'bytea')
  @Column({
    type: 'blob',
  })
  data: Uint8Array;

  //for postgres
  // @Column({
  //   type: 'bytea',
  // })
  // data: Uint8Array;
}
 
export default ImageFile;