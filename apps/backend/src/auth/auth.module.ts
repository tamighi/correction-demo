import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { InvalidatedAuthTokenModule } from "src/models/core";
import { AppConfigModule, AppConfigService } from "src/config";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/models/user/users.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtAdminStrategy } from "./strategies/jwtAdmin.strategy";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfigService: AppConfigService) => {
        return {
          secret: appConfigService.jwt_secret,
          signOptions: { expiresIn: "1d" },
        };
      },
      inject: [AppConfigService],
    }),
    InvalidatedAuthTokenModule,
    AppConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAdminStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
