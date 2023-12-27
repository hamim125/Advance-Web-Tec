// documents/entity/file.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('file')
export class file {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalname: string;

  @Column()
  mimetype: string;

  @Column()
  destination: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  size: number;
}
