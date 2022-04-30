export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    title?: string;
    role?: string;
    archived?: boolean;
    password?: string;

    constructor(id?: number, firstName?: string, lastName?: string, password?: string, title?: string, email?: string, role?: string, archived?: boolean){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.title = title;
        this.archived = archived;
        this.password = password;
    }
}