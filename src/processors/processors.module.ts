import { Module } from '@nestjs/common';
import { Processor1 } from './processor_1.service';
import { Processor2 } from './processor_2.service';
import { Processor3 } from './processor_3.service';
import { Processor4 } from './processor_4.service';

@Module({
  providers: [Processor1, Processor2, Processor3, Processor4],
})
export class ProcessorsModule {}
