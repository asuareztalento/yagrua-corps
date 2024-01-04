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
  database: process.env.DB_NAME,
  entities: [Parking, User, Towtruck],
  host: process.env.DB_HOST,
  migrations: ['migrations/*.ts'],
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  // seeds: [InitSeeder], TODO
  synchronize: false,
  type: 'mysql',
  username: process.env.DB_USER,
};

// export const source = new DataSource(options as DataSourceOptions & SeederOptions);
export const source = new DataSource(options as DataSourceOptions);
