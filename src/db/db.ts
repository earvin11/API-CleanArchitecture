import { DataSource } from 'typeorm';
import { UserModel } from '../Users/infraestructure/models/user.pg-model';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "TEST",
    synchronize: true,
    logging: true,
    entities: [UserModel],
    subscribers: [],
    migrations: [],
});