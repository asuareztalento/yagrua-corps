import { DataSource } from 'typeorm';
// import InitSeeder from './seeds/init.seeder';
// import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import { config } from 'dotenv';
import { resolve } from 'path';
import { User } from 'src/resources/users/entities/user.entity';
import { Towtruck } from 'src/resources/towtrucks/entities/towtruck.entity';
import { Parking } from 'src/resources/parkings/entities/parking.entity';

if (!process.env.ENVIRONMENT) {
  config({ path: resolve(__dirname, '.env') });
}

//export default new DataSource({
const options = {
  database: process.env.DATABASE_NAME,
  entities: [Parking, User, Towtruck],
  host: process.env.DATABASE_HOST,
  migrations: ['migrations/*.ts'],
  password: process.env.DATABASE_PASS,
  port: Number(process.env.DATABASE_PORT),
  // seeds: [InitSeeder], TODO
  synchronize: false,
  type: 'mysql',
  username: process.env.DATABASE_USER,
};

// export const source = new DataSource(options as DataSourceOptions & SeederOptions);
export const source = new DataSource(options as DataSourceOptions);
