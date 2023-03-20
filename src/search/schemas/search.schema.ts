import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SearchDocument = HydratedDocument<Search>;

@Schema()
export class Search {
  @Prop()
  sourceAddress: string;

  @Prop()
  destinationAddress: string;

  @Prop()
  distance: number;
}

export const SearchSchema = SchemaFactory.createForClass(Search);