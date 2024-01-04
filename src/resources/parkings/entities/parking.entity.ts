import { Towtruck } from 'src/resources/towtrucks/entities/towtruck.entity';
import { BasicEntity } from 'src/utils/basic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('parkings')
export class Parking extends BasicEntity {
  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  contactPerson: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: 0.0, type: 'float' })
  latitude: number;

  @Column({ default: 0.0, type: 'float' })
  longitude: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  numVehicles: number;

  @Column({ default: '' })
  phone: string;

  @Column()
  tenant: number;

  @Column({ default: '' })
  town: string;

  @OneToMany(() => Towtruck, (towtruck) => towtruck.parking, {
    eager: true,
    cascade: true,
  })
  towtrucks: Towtruck[];

  @Column({ default: '' })
  zipCode: string;
}
