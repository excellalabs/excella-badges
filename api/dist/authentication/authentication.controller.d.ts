import { AuthenticationService } from './authentication.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    notallowed(): string;
    authenticate(id: string): boolean;
}
