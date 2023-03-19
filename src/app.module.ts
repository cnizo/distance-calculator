import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SearchModule],
})
export class AppModule {}
