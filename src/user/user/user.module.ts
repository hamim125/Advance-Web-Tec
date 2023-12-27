import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { user } from '../user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}