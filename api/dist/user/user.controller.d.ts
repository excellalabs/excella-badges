import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    create(newUser: CreateUserDto): Promise<import("./user").User>;
    authenticate(body: AuthUserDto, session: any): Promise<void>;
    isAuthenticated(session: any): boolean;
    signOut(session: any): void;
    getCurrentUser(session: any): Promise<import("./user").User>;
    getAllUsers(): Promise<import("./user").User[]>;
    getUserById(id: number): Promise<import("./user").User>;
    getUserByEmail(email: string): Promise<import("./user").User[]>;
    removeUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateUser(id: string, body: UpdateUserDto): void;
}
