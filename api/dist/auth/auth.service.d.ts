import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    signup(email: string, password: string): Promise<import("../user/user").User>;
    authenticate(email: string, password: string): Promise<import("../user/user").User>;
}
