import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, LessThan, Repository } from "typeorm";

import { AbstractService } from "..";

import { InvalidatedAuthToken } from "./entities/InvalidatedAuthToken.entity";

@Injectable()
export class InvalidatedAuthTokenService extends AbstractService<
  InvalidatedAuthToken,
  DeepPartial<InvalidatedAuthToken>
> {
  constructor(
    @InjectRepository(InvalidatedAuthToken)
    protected readonly IATrepository: Repository<InvalidatedAuthToken>
  ) {
    super(IATrepository);
  }

  // TODO: Make it work
  @Cron("0 0 * * *")
  async deleteExpiredTokens() {
    const currentDateTime = new Date();
    await this.IATrepository.delete({
      expires: LessThan(currentDateTime),
    });
  }

  async exist(token: string) {
    const isInvalidated = this.IATrepository.exist({
      where: {
        token,
      },
    });
    return isInvalidated;
  }
}
