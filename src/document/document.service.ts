import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository ,} from '@nestjs/typeorm';
import { document } from './entity/document.entity';
import { Repository } from 'typeorm';
import { file } from './entity/file.entity';
@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(document)
        private readonly documentRepository: Repository<document>,
        @InjectRepository(file)
        private readonly fileRepository: Repository<file>,
      ) {}

      async getDocument(): Promise<document[]> {
        return this.documentRepository.find();
      }
    
  async getDocumentById(id: number): Promise<document> {
    const document = await this.documentRepository.findOne({where:{id:id}});

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }

  async createDocument(documentDto: document): Promise<document> {
    const newDocument = this.documentRepository.create(documentDto);
    return this.documentRepository.save(newDocument);
  }

  async updateDocument(id: number, documentDto: document): Promise<document> {
    const document = await this.documentRepository.findOne({where:{id:id}});

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    this.documentRepository.merge(document, documentDto);

    return this.documentRepository.save(document);
  }

  async deleteDocument(id: number): Promise<void> {
    const document = await this.documentRepository.findOne({where:{id:id}});

    if (!document) {
      throw new NotFoundException(`document with ID ${id} not found`);
    }

    await this.documentRepository.remove(document);
  }

  //file upload part
  
  async uploadFile(file: Express.Multer.File): Promise<file> {
    const { originalname, mimetype, destination, filename, path, size } = file;

    const newFile = this.fileRepository.create({
      originalname,
      mimetype,
      destination,
      filename,
      path,
      size,
    });

     return this.fileRepository.save(newFile);
  }
}