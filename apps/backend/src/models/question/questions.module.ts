import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";
import { QuestionsController } from "./questions.controller";
import { MessagesService } from "../message/messages.service";

@Module({
  providers: [QuestionsService],
  controllers: [QuestionsController],
  imports: [TypeOrmModule.forFeature([Question]), MessagesService],
})
export class QuestionsModule {}
