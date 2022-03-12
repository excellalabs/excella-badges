export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    role: string;
    archived: boolean;
    password: string;
    logEvent(): void;
    logUpdate(): void;
    logRemove(): void;
}
