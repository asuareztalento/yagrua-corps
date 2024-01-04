import { Test, TestingModule } from '@nestjs/testing';
import { AllowedController } from './allowed.controller';
import { AllowedService } from './allowed.service';

describe('AllowedController', () => {
  let controller: AllowedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllowedController],
      providers: [AllowedService],
    }).compile();

    controller = module.get<AllowedController>(AllowedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
