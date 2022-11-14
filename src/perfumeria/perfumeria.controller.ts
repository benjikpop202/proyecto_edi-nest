import { Controller, Get, Post } from '@nestjs/common';
import { PerfumeriaService } from './perfumeria.service';

@Controller('api/edi')
export class PerfumeriaController {
  constructor(private readonly perfumeriaservice: PerfumeriaService) {}

  @Get()
  getPerfumeria(): string {
    return this.perfumeriaservice.getPerfumeria();
  }
  @Post()
  postPerfumeria(): string {
    return this.perfumeriaservice.postPerfumeria();
  }
}
