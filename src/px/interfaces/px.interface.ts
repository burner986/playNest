import { Document } from 'mongoose';

export interface Px extends Document {
    readonly name: string;
    readonly age: number;
}