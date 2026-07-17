import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BootService {
  private readonly logger = new Logger(BootService.name);

  bootstrap(): string {
    this.logger.log('Green Basket Platform Kernel Booting...');
    return 'Green Basket Platform Kernel Booted Successfully';
  }
}