import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggingService {

  private readonly logger = new Logger('GreenBasket');

  log(message: string) {
    this.logger.log(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

}