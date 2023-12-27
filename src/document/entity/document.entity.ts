import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @Column()
  description: string;
}



