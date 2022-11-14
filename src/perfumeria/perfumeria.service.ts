import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfumeriaService {
  getPerfumeria(): string {
    return 'chanel, dior, the golden secret';
  }
  postPerfumeria(): string {
    return 'chanel: $20000, dior: $13000, the golden secret: $5200 ';
  }
}
