import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class LifecycleService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private readonly logger = new Logger('Lifecycle');

  onApplicationBootstrap() {
    this.logger.log('Green Basket Platform started successfully.');
  }

  onApplicationShutdown(signal?: string) {
    this.logger.log(
      `Green Basket Platform is shutting down. Signal: ${signal ?? 'unknown'}`,
    );
  }
}