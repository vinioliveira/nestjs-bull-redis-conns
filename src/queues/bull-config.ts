import { Injectable } from '@nestjs/common';
import { SharedBullConfigurationFactory } from '@taskforcesh/nestjs-bullmq-pro';
import Redis from 'ioredis';

@Injectable()
export class BullConfig implements SharedBullConfigurationFactory {
  async createSharedConfiguration() {
    const redis = new Redis();
    process.on('SIGINT', () => {
      redis.quit();
      process.exit(0);
    });

    return {
      connection: redis,
      isPro: true,
    };
  }
}
