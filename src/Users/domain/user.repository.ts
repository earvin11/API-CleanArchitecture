import { UserEntity } from './user';

export interface UserRepository {
    createUser(userEntity: UserEntity): Promise<UserEntity>;
    findUsers(): Promise<UserEntity[] | []>;
    findUserById(uuid: string): Promise<UserEntity | null>;
    updateUser(uuid: string, dataToUpdate: Partial<UserEntity>): Promise<UserEntity | null>;
    deleteUser(uuid: string): Promise<UserEntity>;
};