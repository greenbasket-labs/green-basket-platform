import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentService {

  getEnvironment() {
    return {
      nodeEnv: process.env.NODE_ENV || 'development',
      port: process.env.PORT || 3000,
      platform: 'Green Basket Platform',
      timestamp: new Date().toISOString(),
    };
  }

}