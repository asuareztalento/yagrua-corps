import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { CorpService } from 'src/services/corp.service';

@Controller('corp')
export class CorpController extends BaseController {
  constructor(public corpService: CorpService) {
    super(corpService);
  }
}
