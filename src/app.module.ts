import { Module } from '@nestjs/common';
import { BootModule } from './kernel/boot/boot.module';
import { HealthModule } from './kernel/health/health.module';
import { ConfigModule } from './kernel/config/config.module';

@Module({
  imports: [
    BootModule,
    HealthModule,
    ConfigModule,
  ],
})
export class AppModule {}