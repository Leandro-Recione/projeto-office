import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    body: string

    @Column()
    date: Date
}