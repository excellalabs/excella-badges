import{ IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator'

export class AuthUserDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
    constructor(email: string, password: string){
        this.email = email
        this.password = password
    }
}