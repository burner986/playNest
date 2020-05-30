import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Px } from './interfaces/px.interface';
import { PxInput } from './inputs/px.input';

@Injectable()
export class PxService {
  constructor(@InjectModel('Px') private readonly pxModel: Model<Px>) { }

  async create(newPx: PxInput): Promise<Px> {
    const createdPx = new this.pxModel(newPx);
    return await createdPx.save();
  }

  async findAll(): Promise<Px[]> {
    return await this.pxModel.find().exec();
  }
}
