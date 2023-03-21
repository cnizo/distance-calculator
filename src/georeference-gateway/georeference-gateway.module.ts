import { Module } from '@nestjs/common';
import { GeoreferenceGatewayService } from './georeference-gateway.service';

@Module({
  imports: [],
  providers: [GeoreferenceGatewayService],
  exports: [GeoreferenceGatewayService],
})
export class GeoreferenceGatewayModule {}
