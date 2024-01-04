import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Parking } from 'src/resources/parkings/entities/parking.entity';

export class CreateTowtruckDto {
  @ApiProperty({ description: 'Brand name', required: false })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({ description: 'Color name', required: false })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ description: 'Matriculation year', required: false })
  @IsString()
  @IsOptional()
  enrollmentYear?: string;

  @ApiProperty({ description: 'Friendly internal tow-truck name' })
  @IsString()
  @IsNotEmpty()
  friendlyName: string;

  @ApiProperty({ description: 'License plate', required: false })
  @IsString()
  @IsOptional()
  licensePlate?: string;

  @ApiProperty({ description: 'Model name', required: false })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiProperty({ description: 'Parking id' })
  @IsNotEmpty()
  parking: Parking;

  @ApiProperty({ description: 'Tenant owner id ' })
  @IsNumber()
  @IsNotEmpty()
  tenant: number;

  @ApiProperty({ description: 'Towtruck has a transport card', required: false })
  @IsBoolean()
  @IsOptional()
  transportCard?: boolean;

  @ApiProperty({ description: 'Type name', required: false })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({ description: 'Version name', required: false })
  @IsString()
  @IsOptional()
  version?: string;
}
