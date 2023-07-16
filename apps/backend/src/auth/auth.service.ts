import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InvalidatedAuthTokenService } from "src/models/core/invalidatedAuthToken/invalidatedAuthToken.service";
import { UserDto } from "src/models/user/dtos/user.dto";
import { UsersService } from "src/models/user/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly invalidatedAuthTokenService: InvalidatedAuthTokenService
  ) {}

  async checkPasswordChanged(token: string, sub: { id: number }) {
    try {
      const decodedToken = this.jwtService.verify(token);
      const creationDate = new Date(decodedToken.iat * 1000);

      const user = await this.userService.getOneById(sub);

      const isNewPassword = user.data.lastModified
        ? user.data.lastModified > creationDate
        : false;

      return isNewPassword;
    } catch {
      throw new UnauthorizedException();
    }
  }

  async isTokenInvalid(token: string, payload: any) {
    const isInvalidated = await this.invalidatedAuthTokenService.exist(token);

    const passwordChanged = await this.checkPasswordChanged(token, payload.sub);

    return isInvalidated || passwordChanged;
  }

  async validateUser(
    identifier: string,
    password: string
  ): Promise<UserDto | null> {
    return this.userService.validateUser(identifier, password);
  }

  async login(user: any) {
    const payload = {
      identifier: user.identifier,
      sub: user.id,
      status: user.status,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async invalidateToken(token: string) {
    try {
      const decodedToken = this.jwtService.verify(token);

      const expirationDate = new Date(decodedToken.exp * 1000);

      const invalidatedToken = {
        expires: expirationDate,
        token,
      };

      return this.invalidatedAuthTokenService.create(invalidatedToken);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async logout(user: any, token: string) {
    this.invalidateToken(token);
    return user;
  }

  async changePassword(user: any, body: any) {
    const validation = await this.validateUser(
      user.identifier,
      body.oldPassword
    );
    if (!validation) {
      throw new UnauthorizedException();
    }
    await this.userService.changePassword(validation.id, body.newPassword);

    const payload = {
      identifier: validation.identifier,
      sub: validation.id,
      status: user.status,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
