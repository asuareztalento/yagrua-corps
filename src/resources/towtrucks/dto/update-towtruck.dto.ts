import { PartialType } from '@nestjs/swagger';
import { CreateTowtruckDto } from './create-towtruck.dto';

export class UpdateTowtruckDto extends PartialType(CreateTowtruckDto) {}
