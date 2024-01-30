import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User auth id' })
  @IsNumber()
  @IsNotEmpty()
  auth: number;

  @ApiProperty({ description: 'Driver licence code. Default "B"', required: false })
  @IsString()
  @IsOptional()
  categoryDriverLicense?: string;

  @ApiProperty({ description: 'end time of the working day', required: false })
  @IsDate()
  @IsOptional()
  endSchedule?: Date;

  @ApiProperty({ description: 'start time of the working day', required: false })
  @IsDate()
  @IsOptional()
  initSchedule?: Date;

  @ApiProperty({ description: 'actual latitude position', required: false })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  latitude?: number;

  @ApiProperty({ description: 'actual longitude position', required: false })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  longitude?: number;

  @ApiProperty({ description: 'User has prevention risk training', required: false })
  @IsBoolean()
  @IsOptional()
  occupationalRiskPreventionTraining?: boolean;

  @ApiProperty({ description: 'User trainings', required: false })
  @IsString()
  @IsOptional()
  otherTraining?: string;

  @ApiProperty({ description: 'User tenant' })
  @IsString()
  @IsNotEmpty()
  tenant: number;

  @ApiProperty({ description: 'User has tow-truck license', required: false })
  @IsBoolean()
  @IsOptional()
  towTruckLicense: boolean;
}
