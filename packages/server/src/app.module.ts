import { Module } from '@nestjs/common';
import { DatabaseModule } from './global/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ContentsModule } from './modules/contents/contents.module';
import { AuthModule } from './modules/auth/auth.module';
import { GuestbookModule } from './modules/guestbook/guestbook.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        DatabaseModule,
        ContentsModule,
        AuthModule,
        GuestbookModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
