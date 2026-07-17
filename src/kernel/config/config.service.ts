import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {

  getConfig() {
    return {
      application: 'Green Basket Platform',
      version: '0.3.0',
      environment: 'development',
      timezone: 'Africa/Lagos',
      locale: 'en-NG',
    };
  }

}