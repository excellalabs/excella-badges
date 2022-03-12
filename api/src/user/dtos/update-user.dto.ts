import{ IsEmail, IsString, IsOptional, IsBoolean } from 'class-validator'

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
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
}