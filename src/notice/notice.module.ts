import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { notice } from 'src/document/entity/notice.entity'; 
@Module({
  imports:[TypeOrmModule.forFeature([notice])],

  controllers: [NoticeController],
  providers: [NoticeService]
})
export class NoticeModule {}
