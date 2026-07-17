import { Controller, Get } from '@nestjs/common';
import { EnvironmentService } from './environment.service';

@Controller('environment')
export class EnvironmentController {
  constructor(
    private readonly environmentService: EnvironmentService,
  ) {}

  @Get()
  getEnvironment() {
    return this.environmentService.getEnvironment();
  }
}