import { Test, TestingModule } from '@nestjs/testing';
import { AutomotrizController } from './automotriz.controller';

describe('AutomotrizController', () => {
  let controller: AutomotrizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomotrizController],
    }).compile();

    controller = module.get<AutomotrizController>(AutomotrizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
