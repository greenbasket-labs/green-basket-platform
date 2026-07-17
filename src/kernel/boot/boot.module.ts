import { Module } from '@nestjs/common';
import { BootController } from './boot.controller';
import { BootService } from './boot.service';

@Module({
  controllers: [BootController],
  providers: [BootService],
})
export class BootModule {}