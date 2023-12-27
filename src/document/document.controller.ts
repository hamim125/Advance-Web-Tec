import { Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors,UploadedFile,Res, } from '@nestjs/common';
import { DocumentService } from './document.service';
import { document } from './entity/document.entity';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import * as path from "path";
import { file } from './entity/file.entity';
//import { documentDto } from './document.dto';


@ApiTags('Document')

@Controller('document')
export class DocumentController {
    constructor(private readonly DocumentService: DocumentService) {}

    @Get('getAll')
    async getDocument(): Promise<document[]> {
      return this.DocumentService.getDocument();
    }
    
    
  @Get(':id')
  async getDocumentById(@Param('id') id: string): Promise<document> {
    const documentId = parseInt(id, 10);
    return this.DocumentService.getDocumentById(documentId);
  }

  @Post('creat')
  async createDocument(@Body() documentDto: document): Promise<document> {
    return this.DocumentService.createDocument(documentDto);
  }

  @Put(':id')
  async updateDocument(
    @Param('id') id: string,
    @Body() documentDto: document,
  ): Promise<document> {
    const documentId = parseInt(id, 10);
    return this.DocumentService.updateDocument(documentId, documentDto);
  }

  @Delete(':id')
  async deleteDocument(@Param('id') id: string): Promise<void> {
    const documentId = parseInt(id, 10);
    return this.DocumentService.deleteDocument(documentId);
  }


  //file upload
  
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file' , {
    storage : diskStorage({
      destination : "./uploads",
      filename : (req , file , cb) => {
        cb(null , `${file.originalname}`)
      }
    })
  }))

  async saveFile(@UploadedFile() file : any) {
    console.log(file);
    return "success";
  }
  


  

 
}