import { Parking } from 'src/resources/parkings/entities/parking.entity';
import { BasicEntity } from 'src/utils/basic.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('towtrucks')
export class Towtruck extends BasicEntity {
  @Column({ default: '' })
  brand: string;

  @Column({ default: '', nullable: true })
  color: string;

  @Column({ default: '' })
  enrollmentYear: string;

  @Column({ default: '', nullable: true })
  friendlyName: string;

  @Column({ nullable: true, unique: true })
  licensePlate: string;

  @Column({ default: '' })
  model: string;

  @ManyToOne(() => Parking, (parking) => parking.towtrucks)
  parking: Parking;

  @Column()
  tenant: number;

  @Column({ default: true })
  transportCard: boolean;

  @Column({ default: '' })
  type: string;

  @Column({ default: '' })
  version: string;
}
