import { BasicEntity } from 'src/utils/basic.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BasicEntity {
  @Column()
  auth: number;

  @Column({ default: 'B', nullable: true })
  categoryDriverLicense: string;

  @Column({ nullable: true, type: 'time' })
  endSchedule: Date;

  @Column({ nullable: true, type: 'time' })
  initSchedule: Date;

  @Column({ default: 0.0, precision: 10, scale: 2, type: 'decimal' })
  latitude: number;

  @Column({ default: 0.0, precision: 10, scale: 2, type: 'decimal' })
  longitude: number;

  @Column({ default: false, nullable: true })
  occupationalRiskPreventionTraining: boolean;

  @Column({ default: '', nullable: true })
  otherTraining: string;

  @Column({ default: false, nullable: true })
  towTruckLicense: boolean;
}
