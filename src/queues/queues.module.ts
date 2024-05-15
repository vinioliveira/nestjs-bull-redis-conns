import { Module } from '@nestjs/common';
import { BullModule } from '@taskforcesh/nestjs-bullmq-pro';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: 'queue_1', isPro: true },
      { name: 'queue_2', isPro: true },
      { name: 'queue_3', isPro: true },
      { name: 'queue_4', isPro: true },
      { name: 'queue_5', isPro: true },
    ),
  ],
  providers: [],
  exports: [BullModule.registerQueue({ name: 'queue_1', isPro: true })],
  controllers: [],
})
export class QueuesModule {}
