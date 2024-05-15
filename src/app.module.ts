import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessorsModule } from './processors/processors.module';
import { BullModule } from '@taskforcesh/nestjs-bullmq-pro';
import { QueuesModule } from './queues/queues.module';
import { BullConfig } from './queues/bull-config';
import Redis from 'ioredis';

@Module({
  imports: [
    BullModule.forRootAsync({
      useClass: BullConfig,
      // useFactory: async () => {
      //   const redis = new Redis();
      //   return {
      //     connection: redis,
      //     // connection: {
      //     //   host: 'localhost',
      //     //   port: 6379,
      //     // },
      //     isPro: true,
      //     defaultJobOptions: { removeOnComplete: true },
      //   };
      // },
    }),
    ProcessorsModule,
    QueuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
