import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";

import { QueryDto } from "../core";

import { MessagesService } from "../message/messages.service";
import { ReviewDto } from "./dtos/review.dto";
import { Review } from "./entities/review.entity";

@Injectable()
export class ReviewsService extends MessagesService<Review, ReviewDto> {
  constructor(
    @InjectRepository(Review)
    protected readonly reviewRepository: Repository<Review>
  ) {
    super(reviewRepository);
  }

  override entityToDto(review: Review): ReviewDto {
    const reviewDto: ReviewDto = super.entityToDto(review);

    reviewDto.note = review.note;

    return reviewDto;
  }

  async fetchReviews(query: QueryDto) {
    query.filter = {
      status: "accepted",
    };
    const [data, count]: [Review[], number] =
      await this.repository.findAndCount({
        where: query.filter as FindOptionsWhere<Review>,
        ...(query.sort && { order: query.sort }),
        ...(query.range && {
          skip: query.range[0],
          take: query.range[1] - query.range[0] + 1,
        }),
      });
    return { data: data.map((x) => this.entityToDto(x)), count: count };
  }
}
