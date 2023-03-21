import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    SearchModule,
    MongooseModule.forRoot('mongodb://mongodb:27017'),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
