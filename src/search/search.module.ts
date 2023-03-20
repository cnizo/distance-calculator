import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeoreferenceGatewayModule } from 'src/georeference-gateway/georeference-gateway.module';
import { SearchDomainService } from './search.domain.service';
import { DistanceCalculatorService } from './distance-calcualator.service';
import { Search, SearchSchema } from './schemas/search.schema';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [
    GeoreferenceGatewayModule,
    MongooseModule.forFeature([{ name: Search.name, schema: SearchSchema }])
  ],
  controllers: [SearchController],
  providers: [SearchDomainService, SearchService, DistanceCalculatorService],
})
export class SearchModule {}
