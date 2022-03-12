import { Controller, Session, Get, Post, Body, Patch, Query, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from 'src/auth/auth.service';

@Serialize(UserDto)
@Controller('user')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService){}

    /**
     * Create new users
     * @param body New user
     */
    @Post('/signup')
    async signup(@Body() body: CreateUserDto, @Session() session){
        const user = await this.authService.signup(body.email, body.password)
        session.userId = user.id
        session.save((err) => {
            console.log(err ? err : 'New user registered: ',user);
        })
        return user;
    }

    /**
     * Authenticate users
     * @param body 
     * @returns authenticated user
     */
    @Post('/signin')
    async signin(@Body() body: CreateUserDto, @Session() session) {
        const user = await this.authService.authenticate(body.email, body.password);
            session.userId = user.id
            session.save((err) => {
                console.log(err ? err : 'User login successful: ',user.email);
            })
    }

    /**
     * Signs out user from session
     * @param session 
     */
    @Post('/signout')
    signOut(@Session() session: any) {
        session.userId = null;
    }

    /**
     * Returns the currently signed-in user
     * @param session 
     * @returns current user
     */
    @Get('/currentUser')
    getCurrentUser(@Session() session) {
        return this.userService.findOne(session.userId)
    }

    /**
     * Return list of all users
     * @returns Users
     */
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    
    /**
     * Get the user by id
     * @param id: User id
     * @returns User
     */
    @Get('/id/:id')
    getUserById(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    /**
     * Get the user by email address
     * @param email User email address
     * @returns User
     */
    @Get('/email/:email')
    getUserByEmail(@Param('email') email: string){
        return this.userService.findByEmail(email);
    }

    /**
     * Deletes a user
     * @param id User id
     * @returns DeleteResult
     */
    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    /**
     * Updates attributes for an existing user
     * @param id User id
     * @param body
     */
    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        this.userService.update(parseInt(id), body);
    }

}
