import { Request, Response } from 'express';
import { UserRepository } from '../domain/user.repository';

export class UserController {
    constructor(
        private userRepository: UserRepository
    ) {}

    public createUser = async(req: Request, res: Response) => {
        try {
            const {
                email,
                name,
                password,
                role
            } = req.body;

            const user = await this.userRepository.createUser({
                email,
                name,
                password,
                role
            });

            res.status(201).json({
                message: 'User created',
                user
            });
        } catch (error) {
            console.log('ERROR CREATED USER', error);
            res.status(500).json({ error: 'Internal server error' });
        };
    };
}