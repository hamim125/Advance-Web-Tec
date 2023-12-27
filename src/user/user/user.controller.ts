import { Controller,Body,Post,Res,Get,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    
    @Get(':id')
    userId(@Param('id') id:number){
        return this.userService.findOne(id);
    }
    @Get('get')
    method(){
        return {'get':'created' };
    }

    @Post('create')
    create (@Body() createUserDto: CreateUserDto){
        
       return this.userService.create(createUserDto);
       //return this.
    }
}