import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {

  check() {
    return {
      status: 'healthy',
      service: 'Green Basket Platform',
      version: '0.2.0',
      timestamp: new Date().toISOString(),
    };
  }

}