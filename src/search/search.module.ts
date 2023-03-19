import { Module } from '@nestjs/common';
import { GeoreferenceGatewayModule } from 'src/georeference-gateway/georeference-gateway.module';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [GeoreferenceGatewayModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
