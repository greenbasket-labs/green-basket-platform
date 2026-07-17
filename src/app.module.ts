import { Module } from '@nestjs/common';
import { BootModule } from './kernel/boot/boot.module';
import { HealthModule } from './kernel/health/health.module';

@Module({
  imports: [
    BootModule,
    HealthModule,
  ],
})
export class AppModule {}