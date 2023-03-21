import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SearchModule, MongooseModule.forRoot(process.env.DB_CONNECTION_STRING)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
