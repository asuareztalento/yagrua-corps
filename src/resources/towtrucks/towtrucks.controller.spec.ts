import { Test, TestingModule } from '@nestjs/testing';
import { TowtrucksController } from './towtrucks.controller';
import { TowtrucksService } from './towtrucks.service';

describe('TowtrucksController', () => {
  let controller: TowtrucksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TowtrucksController],
      providers: [TowtrucksService],
    }).compile();

    controller = module.get<TowtrucksController>(TowtrucksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
