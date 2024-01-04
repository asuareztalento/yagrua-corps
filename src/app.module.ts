import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './resources/users/users.module';
import { User } from './resources/users/entities/user.entity';
import { TowtrucksModule } from './resources/towtrucks/towtrucks.module';
import { Towtruck } from './resources/towtrucks/entities/towtruck.entity';
import { ParkingsModule } from './resources/parkings/parkings.module';
import { Parking } from './resources/parkings/entities/parking.entity';
import { AllowedModule } from './resources/allowed/allowed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      database: process.env.DB_NAME,
      entities: [Parking, User, Towtruck],
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      type: 'mysql',
      username: process.env.DB_USER,
    }),
    UsersModule,
    TowtrucksModule,
    ParkingsModule,
    AllowedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
