import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomotrizController } from './automotriz/automotriz.controller';
import { AutomotrizService } from './automotriz/automotriz.service';
import { PerfumeriaController } from './perfumeria/perfumeria.controller';
import { PerfumeriaService } from './perfumeria/perfumeria.service';

@Module({
  imports: [],
  controllers: [AppController, AutomotrizController, PerfumeriaController],
  providers: [AppService, AutomotrizService, PerfumeriaService],
})
export class AppModule {}
