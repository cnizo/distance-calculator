import { Module } from '@nestjs/common';
import { GeoreferenceGatewayModule } from 'src/georeference-gateway/georeference-gateway.module';
import { SearchDomainService } from './search.domain.service';
import { DistanceCalculatorService } from './distance-calcualator.service';
import { SearchController } from './search.controller';
import { SearchService } from './entity/search.service';

@Module({
  imports: [
    GeoreferenceGatewayModule,
  ],
  controllers: [SearchController],
  providers: [SearchDomainService, SearchService, DistanceCalculatorService],
})
export class SearchModule {}
