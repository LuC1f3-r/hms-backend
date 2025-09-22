import { Module } from '@nestjs/common';
import { LabsService } from './services/labs.service';
import { LabsController } from './controllers/labs.controller';

@Module({
  controllers: [LabsController],
  providers: [LabsService],
})
export class LabsModule {}
