import { JobPro } from '@taskforcesh/bullmq-pro';
import { Processor } from '@taskforcesh/nestjs-bullmq-pro';
import { WorkerHost } from '@taskforcesh/nestjs-bullmq-pro';

@Processor('queue_1')
export class Processor1 extends WorkerHost {
  process(job: JobPro) {
    console.log('job', job);
    return Promise.resolve('success');
  }
}
