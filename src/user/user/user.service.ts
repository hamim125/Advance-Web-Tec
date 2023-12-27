import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from '../user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(user) private readonly userRepo: Repository<user>){

    } 
    
    async findOne(id: number){
        return await this.userRepo.findOne({where: {id:id}});
    }

    async create(createUserDto: CreateUserDto){
        
        const user = this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }
    
}