export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    title?: string;
    role?: string;
    archived?: boolean;
    password?: string;

    constructor(id?: number, firstName?: string, lastName?: string, email?: string, title?: string, role?: string, archived?: boolean, password?: string){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.title = title;
        this.role = role;
        this.archived = archived;
        this.password = password;
    }
}