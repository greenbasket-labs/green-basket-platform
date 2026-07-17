import { Module } from '@nestjs/common';
import { BootModule } from './kernel/boot/boot.module';

@Module({
  imports: [BootModule],
})
export class AppModule {}