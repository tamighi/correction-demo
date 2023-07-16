import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { AppConfigModule, TypeOrmConfigModule } from "./config";
import { FileModule } from "./models/core";
import { AuthModule } from "./auth";
import { InvalidatedAuthTokenModule } from "./models/core/invalidatedAuthToken/invalidatedAuthToken.module";

import { ServicesModule } from "./models/service/services.module";
import { UsersModule } from "./models/user/users.module";
import { SubServicesModule } from "./models/subService/subServices.module";
import { QuestionsModule } from "./models/question/questions.module";
import { DevisModule } from "./models/devis/devis.module";
import { ReviewsModule } from "./models/review/reviews.module";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AppConfigModule,
    TypeOrmConfigModule,
    FileModule,
    AuthModule,
    InvalidatedAuthTokenModule,
    UsersModule,
    ServicesModule,
    SubServicesModule,
    QuestionsModule,
    DevisModule,
    ReviewsModule,
  ],
})
export class AppModule {}
