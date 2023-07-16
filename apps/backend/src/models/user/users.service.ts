import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { comparePwd, hashPwd } from "src/helper";
import { AbstractService } from "../core";
import { AppConfigService } from "src/config";

import { UserDto } from "./dtos/user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService extends AbstractService<User, UserDto> {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
    protected readonly appConfigService: AppConfigService
  ) {
    super(userRepository);

    this.createDefaultUser();
  }

  async validateUser(identifier: string, password: string) {
    const user: User | null = await this.repository.findOneBy({
      identifier: identifier,
    });
    if (!user || !(await comparePwd(password, user.password))) {
      return null;
    }
    return this.entityToDto(user);
  }

  async createDefaultUser() {
    const count = await this.userRepository.count();

    if (count === 0) {
      const user = this.userRepository.create({
        identifier: this.appConfigService.default_user_id,
        status: "user",
        password: await hashPwd(
          this.appConfigService.default_user_pwd as string
        ),
      });
      const admin = this.userRepository.create({
        identifier: this.appConfigService.default_admin_id,
        status: "admin",
        password: await hashPwd(
          this.appConfigService.default_admin_pwd as string
        ),
      });
      await this.userRepository.save(user);
      await this.userRepository.save(admin);
    }
  }

  entityToDto(user: User): UserDto {
    const userDto: UserDto = new UserDto();

    userDto.id = user.id;
    userDto.identifier = user.identifier;
    userDto.status = user.status;
    userDto.lastModified = user.lastModified;

    return userDto;
  }

  async changePassword(id: number, newPassword: string) {
    const hashedPwd = await hashPwd(newPassword);

    const lastModified = new Date();

    lastModified.setMilliseconds(0);

    await this.userRepository.update(id, {
      password: hashedPwd,
      lastModified,
    });
  }
}
