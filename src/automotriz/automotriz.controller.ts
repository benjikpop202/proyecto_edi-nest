import { Controller, Get, Post } from '@nestjs/common';
import { AutomotrizService } from './automotriz.service';

@Controller('automotriz')
export class AutomotrizController {
  constructor(private readonly automotrizService: AutomotrizService) {}

  @Get()
  getAutomotriz(): string {
    return this.automotrizService.getAutomotriz();
  }

  @Post()
  postAutomotriz(): string {
    return this.automotrizService.postAutomotriz();
  }
}
