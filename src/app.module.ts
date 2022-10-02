import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './config/database.module';
import { CorpEntity } from './entities/corp.entity';
import { ConfigModule } from '@nestjs/config';
import { CorpService } from './services/corp.service';
import { CorpController } from './controllers/corp.controller';

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
            // envFilePath: '.development.env'
        }),
        TypeOrmModule.forFeature([CorpEntity]),
    ],
    controllers: [CorpController],
    providers: [CorpService],
})
export class AppModule {}
