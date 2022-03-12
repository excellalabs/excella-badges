import{ IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator'
import { EphemeralKeyInfo } from 'tls';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    role: string;

    @IsBoolean()
    @IsOptional()
    archived: boolean;

    constructor(email: string, password: string){
        this.email = email
        this.password = password
        this.archived = false
    }
}