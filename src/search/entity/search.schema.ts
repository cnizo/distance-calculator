import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SearchDocument = HydratedDocument<Search>;

@Schema()
export class Search {
  @Prop()
  source: string;

  @Prop()
  destination: string;

  @Prop()
  distance: number;
}

export const SearchSchema = SchemaFactory.createForClass(Search);