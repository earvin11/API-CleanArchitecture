import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserModel extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    uuid: string;
};