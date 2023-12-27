import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { notice } from 'src/document/entity/notice.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Notice')
@Controller('notice')
export class NoticeController {
    

    constructor(private readonly NoticeService: NoticeService) {}
    @Get('getAll')
    async getNotice(): Promise<notice[]> {
      return this.NoticeService.getNotice();
    }

    @Get(':id')
    async getNoticeById(@Param('id') id: string): Promise<notice> {
      const noticeId = parseInt(id, 10);
      return this.NoticeService.getNoticeById(noticeId);
    }

    @Post('creat')
  async createNotice(@Body() noticeDto: notice): Promise<notice> {
    return this.NoticeService.createNotice(noticeDto);
  }
  
  

}
    