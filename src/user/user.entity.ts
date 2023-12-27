import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')

export class user{
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
Address: string;
}