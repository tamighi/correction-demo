import {
  Controller,
} from "@nestjs/common";
import { MessagesController } from "../message/messages.controller";
import { QuestionDto } from "./dtos/question.dto";
import { Question } from "./entities/question.entity";
import { QuestionsService } from "./questions.service";

@Controller("question")
export class QuestionsController extends MessagesController<
  Question,
  QuestionDto
> {
  constructor(private readonly questionService: QuestionsService) {
    super(questionService);
  }
}
