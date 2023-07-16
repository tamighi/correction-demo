import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { File } from "./entity/file.entity";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [FileService],
  exports: [FileService],
  controllers: [FileController]
})
export class FileModule {}
