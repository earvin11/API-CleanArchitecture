export interface UserEntity {
    name: string;
    email: string;
    password: string;
    role: string;
    uuid?: string;
};

export class User implements UserEntity {
    public name: string;
    public email: string;
    public password: string;
    public role: string;
    public uuid?: string | undefined;

    constructor(user: UserEntity) {
        this.name = user.name;
        this.email = user.name;
        this.password = user.password;
        this.role = user.role;
        this.uuid = 'uuid'
    };
};