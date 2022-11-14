import { Test, TestingModule } from '@nestjs/testing';
import { AutomotrizService } from './automotriz.service';

describe('AutomotrizService', () => {
  let service: AutomotrizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomotrizService],
    }).compile();

    service = module.get<AutomotrizService>(AutomotrizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
