import { UserEntity } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { UserModel } from '../models/user.pg-model';

export class UserPgRepository implements UserRepository {
    public createUser = async(userEntity: UserEntity): Promise<UserEntity> => {
        try {
            const { email, name, password, role } = userEntity;
            const newUser = new UserModel();
            newUser.email = email;
            newUser.name = name;
            newUser.password = password;
            newUser.role = role;

            await newUser.save();
            return newUser;
        } catch (error) {
            throw error;
        }
    }
    public findUsers = async(): Promise<UserEntity[] | []> => {
        throw new Error('Method not implemented.');
    }
    public findUserById = async(uuid: string): Promise<UserEntity | null> => {
        throw new Error('Method not implemented.');
    }
    public updateUser = async(uuid: string, dataToUpdate: Partial<UserEntity>): Promise<UserEntity | null> => {
        throw new Error('Method not implemented.');
    }
    public deleteUser = async(uuid: string): Promise<UserEntity> => {
        throw new Error('Method not implemented.');
    }
};