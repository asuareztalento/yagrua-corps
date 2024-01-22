import { BasicEntity } from 'src/utils/basic.entity';
import { Column, Entity } from 'typeorm';

export enum OnDutyStatuses {
  // user is ready to attend a new service
  AVAILABLE = 'AVAILABLE',
  // the user set at the app that is not available
  ABSENT = 'ABSENT',
  // The user is currently at a service
  ON_SERVICE = 'ON_SERVICE',
}

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

  @Column({
    default: OnDutyStatuses.AVAILABLE,
    enum: OnDutyStatuses,
    type: 'enum',
  })
  onDuty: OnDutyStatuses;

  @Column({ default: '', nullable: true })
  otherTraining: string;

  @Column({ default: false, nullable: true })
  towTruckLicense: boolean;
}
