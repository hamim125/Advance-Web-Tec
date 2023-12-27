import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { notice } from 'src/document/entity/notice.entity';
import { Repository } from 'typeorm';
@Injectable()
export class NoticeService {
    constructor(
        @InjectRepository(notice)
        private readonly noticeRepository: Repository<notice>
        
      ) {}

      async getNotice(): Promise<notice[]> {
        return this.noticeRepository.find();
      }
    
  async getNoticeById(id: number): Promise<notice> {
    const notice = await this.noticeRepository.findOne({where:{id:id}});

    if (!notice) {
      throw new NotFoundException(`Notice with ID ${id} not found`);
    }

    return notice;
  }

  async createNotice(noticeDto: notice): Promise<notice> {
    const newNotice = this.noticeRepository.create(noticeDto);
    return this.noticeRepository.save(newNotice);
  }


}
