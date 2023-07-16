import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) { }

  get db_host(): string | undefined {
    return this.configService.get<string>("app.db_host");
  }
  get db_port(): number {
    return Number(this.configService.get<number>("app.db_port"));
  }
  get db_name(): string | undefined {
    return this.configService.get<string>("app.db_name");
  }
  get db_username(): string | undefined {
    return this.configService.get<string>("app.db_username");
  }
  get db_password(): string | undefined {
    return this.configService.get<string>("app.db_password");
  }
  get default_user_id(): string | undefined {
    return this.configService.get<string>("app.default_user_id");
  }
  get default_user_pwd(): string | undefined {
    return this.configService.get<string>("app.default_user_pwd");
  }
  get default_admin_id(): string | undefined {
    return this.configService.get<string>("app.default_admin_id");
  }
  get default_admin_pwd(): string | undefined {
    return this.configService.get<string>("app.default_admin_pwd");
  }
  get jwt_secret(): string | undefined {
    return this.configService.get<string>("app.jwt_secret");
  }
}
