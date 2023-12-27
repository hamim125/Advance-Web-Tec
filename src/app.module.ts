import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionModule } from './subscription/subscription.module';
import { DocumentModule } from './document/document.module';
import { NoticeModule } from './notice/notice.module';
import config from './ormconfig';


@Module({
  imports: [
    SubscriptionModule,TypeOrmModule.forRoot(config), DocumentModule, NoticeModule
  ],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}
