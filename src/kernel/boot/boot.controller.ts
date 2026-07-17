import { Controller, Get } from '@nestjs/common';
import { BootService } from './boot.service';

@Controller('boot')
export class BootController {
  constructor(private readonly bootService: BootService) {}

  @Get()
  boot() {
    return {
      platform: 'Green Basket Platform',
      status: this.bootService.bootstrap(),
      version: '0.1.0',
    };
  }
}