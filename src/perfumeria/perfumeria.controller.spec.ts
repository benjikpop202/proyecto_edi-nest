import { Test, TestingModule } from '@nestjs/testing';
import { PerfumeriaController } from './perfumeria.controller';

describe('PerfumeriaController', () => {
  let controller: PerfumeriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfumeriaController],
    }).compile();

    controller = module.get<PerfumeriaController>(PerfumeriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
