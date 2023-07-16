import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import configuration from "./configuration";
import { AppConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      ignoreEnvFile: true,
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
