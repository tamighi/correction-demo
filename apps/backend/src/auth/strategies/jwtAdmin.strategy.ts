import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

import { Request } from "express";
import { AppConfigService } from "src/config/app/config.service";

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, "jwt-admin") {
  constructor(
    private readonly authService: AuthService,
    private readonly appConfigService: AppConfigService
  ) {
    super({
      secretOrKey: appConfigService.jwt_secret,
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    });
  }
  async validate(req: Request, payload: any) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException();
    }

    const token = authorizationHeader.split(" ")[1];
    if (await this.authService.isTokenInvalid(token, payload)) {
      throw new UnauthorizedException();
    }

    if (payload.status !== "admin") {
      throw new ForbiddenException();
    }

    return {
      id: payload.sub,
      identifier: payload.identifier,
      status: payload.status,
    };
  }
}
