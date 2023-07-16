import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { AppConfigService } from "..";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(protected appConfigService: AppConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      host: this.appConfigService.db_host,
      port: this.appConfigService.db_port,
      database: this.appConfigService.db_name,
      username: this.appConfigService.db_username,
      password: this.appConfigService.db_password,

      entities: ["build/**/*.entity.{ts,js}"],

      synchronize: true,
    };
  }
}
