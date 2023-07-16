import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from "@nestjs/common";

import { QueryDto } from "../core";

import { MessagesController } from "../message/messages.controller";
import { ReviewDto } from "./dtos/review.dto";
import { Review } from "./entities/review.entity";
import { ReviewsService } from "./reviews.service";

@Controller("review")
export class ReviewsController extends MessagesController<Review, ReviewDto> {
  constructor(private readonly reviewsService: ReviewsService) {
    super(reviewsService);
  }

  @Get("fetchReviews")
  async fetchReviews(@Query() query: QueryDto) {
    try {
      return await this.reviewsService.fetchReviews(query);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
