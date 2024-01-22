import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { OnDutyStatuses } from '../entities/user.entity';
import { IsEnum, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['auth'] as const)) {
  @IsEnum(OnDutyStatuses)
  @IsString()
  onDuty: OnDutyStatuses;
}
