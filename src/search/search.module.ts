import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeoreferenceGatewayModule } from '../georeference-gateway/georeference-gateway.module';
import { SearchDomainService } from './search.domain.service';
import { DistanceCalculatorService } from './distance-calculator.service';
import { SearchController } from './search.controller';
import { SearchService } from './entity/search.service';
import { Search, SearchSchema } from './entity/search.schema';

@Module({
  imports: [
    GeoreferenceGatewayModule,
    MongooseModule.forFeature([{ name: Search.name, schema: SearchSchema }]),
  ],
  controllers: [SearchController],
  providers: [SearchDomainService, SearchService, DistanceCalculatorService],
})
export class SearchModule {}
