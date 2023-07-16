import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MulterModule } from "@nestjs/platform-express";

import { FileModule } from "../core";
import { MulterConfigService } from "src/config";

import { DevisService } from "./devis.service";
import { Devis } from "./entities/devis.entity";
import { DevisController } from "./devis.controller";
import { MessagesService } from "../message/messages.service";

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
    TypeOrmModule.forFeature([Devis]),
    MessagesService,
    FileModule,
  ],
  providers: [DevisService],
  controllers: [DevisController],
})
export class DevisModule {}
