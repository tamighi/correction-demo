import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { InvalidatedAuthToken } from "./entities/InvalidatedAuthToken.entity";
import { InvalidatedAuthTokenService } from "./invalidatedAuthToken.service";

@Module({
  imports: [TypeOrmModule.forFeature([InvalidatedAuthToken])],
  providers: [InvalidatedAuthTokenService],
  exports: [InvalidatedAuthTokenService],
})
export class InvalidatedAuthTokenModule {}
