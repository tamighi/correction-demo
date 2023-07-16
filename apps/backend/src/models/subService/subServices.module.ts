import { Module } from "@nestjs/common";
import { SubServicesService } from "./subServices.service";
import { SubServicesController } from "./subServices.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubService } from "./entities/subService.entity";

@Module({
  controllers: [SubServicesController],
  providers: [SubServicesService],
  imports: [TypeOrmModule.forFeature([SubService])],
})
export class SubServicesModule {}
