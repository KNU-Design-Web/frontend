import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { DatabaseModule } from 'src/global/database/database.module';

@Module({
    controllers: [ContentsController],
    providers: [ContentsService],
    imports: [DatabaseModule],
})
export class ContentsModule {}
