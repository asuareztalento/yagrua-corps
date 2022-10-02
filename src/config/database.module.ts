import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorpEntity } from 'src/entities/corp.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        console.log('configservice');
        console.log(configService.get('DB_HOST'));
        console.log(configService.get('DB_PORT'));
        console.log(configService.get('DB_USER'));
        console.log(configService.get('DB_PASSWORD'));
        console.log(configService.get('DB_NAME'));
        console.log(typeof configService.get('DB_NAME'));
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [CorpEntity],
          synchronize: true,
          insecureAuth: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {
  constructor() {}
}
