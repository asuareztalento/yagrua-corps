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
      database: process.env.DATABASE_NAME,
      entities: [Parking, User, Towtruck],
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASS,
      port: Number(process.env.DATABASE_PORT),
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      type: 'mysql',
      username: process.env.DATABASE_USER,
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
