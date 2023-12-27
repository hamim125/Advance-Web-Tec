// documents/entity/notice.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notice')
export class notice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;


}
