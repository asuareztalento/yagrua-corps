import { Test, TestingModule } from '@nestjs/testing';
import { AllowedService } from './allowed.service';

describe('AllowedService', () => {
  let service: AllowedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllowedService],
    }).compile();

    service = module.get<AllowedService>(AllowedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
