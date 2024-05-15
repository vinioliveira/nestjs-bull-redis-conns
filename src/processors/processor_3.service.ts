import { JobPro } from '@taskforcesh/bullmq-pro';
import { Processor } from '@taskforcesh/nestjs-bullmq-pro';
import { WorkerHost } from '@taskforcesh/nestjs-bullmq-pro';

@Processor('queue_3')
export class Processor3 extends WorkerHost {
  process(job: JobPro) {
    console.log('job', job);
    return Promise.resolve('success');
  }
}
