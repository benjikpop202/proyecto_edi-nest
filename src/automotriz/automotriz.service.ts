import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomotrizService {
  getAutomotriz(): string {
    return 'Toyota Corolla, Renault Fluence, Nissan Sentra.';
  }
  postAutomotriz(): string {
    return 'Toyota Corolla: $4.000.000, Renault Fluence: $2.800.000, Nissan Sentra: $4.200.000';
  }
}
