import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateTowtruckDto } from 'src/resources/towtrucks/dto/create-towtruck.dto';
import { Towtruck } from 'src/resources/towtrucks/entities/towtruck.entity';

export class CreateParkingDto {
  @ApiProperty({ description: 'Parking address' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ description: 'Contact name', required: false })
  @IsString()
  @IsOptional()
  contactPerson?: string;

  @ApiProperty({ description: 'Contact email', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'Parking latitude position' })
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({ description: 'Parking longitude position' })
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({ description: 'Parking name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Number of vehicles that can be stored' })
  @IsNumber()
  @IsOptional()
  numVehicles?: number;

  @ApiProperty({ description: 'Contact phone number', required: false })
  @IsPhoneNumber('ES')
  @IsOptional()
  phone: string;

  @ApiProperty({ description: 'Tenant owner id' })
  @IsNumber()
  @IsNotEmpty()
  tenant: number;

  @ApiProperty({ description: 'City name' })
  @IsString()
  @IsOptional()
  town?: string;

  @ApiProperty({ description: 'Towtrucks based in this parking', required: false })
  @ValidateNested({ each: true })
  @Type(() => CreateTowtruckDto)
  @IsOptional()
  towtrucks?: Towtruck[];

  @ApiProperty({ description: 'Postal code' })
  @IsString()
  @IsOptional()
  zipCode?: string;
}
