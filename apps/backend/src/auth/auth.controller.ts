import {
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";

import { JwtAuthGuard, LocalAuthGuard } from "src/common";

import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Req() req: Request): Promise<any> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("checkAuth")
  async checkAuth(@Req() req: Request): Promise<any> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  async logout(@Req() req: Request) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException();
    }

    const token = authorizationHeader.split(" ")[1];

    return this.authService.logout(req.user, token);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post("changePassword")
  // async changePassword(@Req() req: Request, @Body() body: any) {
  //   return this.authService.changePassword(req.user, body);
  // }
}
