import { Module } from '@nestjs/common';
import { BillingService } from './services/billing.service';
import { BillingController } from './controllers/billing.controller';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
