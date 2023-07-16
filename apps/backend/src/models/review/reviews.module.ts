import { Module } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./entities/review.entity";
import { ReviewsController } from "./reviews.controller";
import { MessagesService } from "../message/messages.service";

@Module({
  providers: [ReviewsService],
  controllers: [ReviewsController],
  imports: [TypeOrmModule.forFeature([Review]), MessagesService],
})
export class ReviewsModule {}
