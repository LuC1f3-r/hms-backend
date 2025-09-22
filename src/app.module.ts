import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LabsModule } from './modules/labs/labs.module';
import { BillingModule } from './modules/billing/billing.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [AuthModule, UsersModule, LabsModule, BillingModule, AppointmentsModule, IntegrationsModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
