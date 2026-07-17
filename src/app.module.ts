import { Module } from '@nestjs/common';
import { BootModule } from './kernel/boot/boot.module';
import { HealthModule } from './kernel/health/health.module';
import { ConfigModule } from './kernel/config/config.module';
import { EnvironmentModule } from './kernel/environment/environment.module';
import { LoggingModule } from './kernel/logging/logging.module';

@Module({
  imports: [
    BootModule,
    HealthModule,
    ConfigModule,
    EnvironmentModule,
    LoggingModule,
  ],
})
export class AppModule {}