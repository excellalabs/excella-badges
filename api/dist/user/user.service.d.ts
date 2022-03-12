import { Repository } from 'typeorm';
import { User } from './user';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    create(newUser: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User[]>;
    findAll(): Promise<User[]>;
    update(id: number, attrs: Partial<User>): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
