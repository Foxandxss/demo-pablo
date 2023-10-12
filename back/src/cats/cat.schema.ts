import { Document, Schema } from 'mongoose';

export const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
});

export interface Cat extends Document {
  name: string;
  age: number;
  breed: string;
}
