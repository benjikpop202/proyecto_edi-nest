import { Test, TestingModule } from '@nestjs/testing';
import { PerfumeriaService } from './perfumeria.service';

describe('PerfumeriaService', () => {
  let service: PerfumeriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfumeriaService],
    }).compile();

    service = module.get<PerfumeriaService>(PerfumeriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
