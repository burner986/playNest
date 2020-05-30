import { Module } from '@nestjs/common';
import { PxResolver } from './Px.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PxSchema } from './px.schema';
import { PxService } from './px.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Px', schema: PxSchema }])],
    providers: [PxResolver, PxService],
})
export class PxModule {}
