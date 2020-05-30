import * as mongoose from 'mongoose';

export const PxSchema = new mongoose.Schema({
    name: String,
    age: Number,
});