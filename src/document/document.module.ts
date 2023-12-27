import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { document } from './entity/document.entity';
import { file } from './entity/file.entity';


@Module({
  imports:[TypeOrmModule.forFeature([document, file])],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {}
