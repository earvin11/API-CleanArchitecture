import { UserEntity } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

export class UserUseCases {
    constructor(
        private userRepository: UserRepository
    ) {}

    public createUser = async(user: UserEntity) => {
        const newUser = await this.userRepository.createUser(user);
        return newUser;
    };

    public findUsers = async() => {
        const users = await this.userRepository.findUsers();
        return users;
    };

    public findUserById = async(uuid: string) => {
        const user = await this.userRepository.findUserById(uuid);
        return user;
    };

    public updateUser = async(uuid: string, dataToUpdate: Partial<UserEntity>) => {
        const user = await this.userRepository.updateUser(uuid, dataToUpdate);
        return user;
    };

    public deleteUser = async(uuid: string) => {
        const userDeleted = await this.userRepository.deleteUser(uuid);
        return userDeleted;
    };
};