import { Module } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { GuestbookController } from './guestbook.controller';

@Module({
  controllers: [GuestbookController],
  providers: [GuestbookService],
})
export class GuestbookModule {}
