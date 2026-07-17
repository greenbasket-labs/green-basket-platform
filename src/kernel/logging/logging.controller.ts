import { Controller, Get } from '@nestjs/common';
import { LoggingService } from './logging.service';

@Controller('logging')
export class LoggingController {
  constructor(
    private readonly loggingService: LoggingService,
  ) {}

  @Get()
  testLogging() {

    this.loggingService.log('Information log test');
    this.loggingService.warn('Warning log test');
    this.loggingService.error('Error log test');

    return {
      status: 'Logging module is working.',
    };
  }
}