import { Test, TestingModule } from '@nestjs/testing';
import { TowtrucksService } from './towtrucks.service';

describe('TowtrucksService', () => {
  let service: TowtrucksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TowtrucksService],
    }).compile();

    service = module.get<TowtrucksService>(TowtrucksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
