import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessagesService } from "../message/messages.service";
import { QuestionDto } from "./dtos/question.dto";
import { Question } from "./entities/question.entity";

@Injectable()
export class QuestionsService extends MessagesService<Question, QuestionDto> {
  constructor(
    @InjectRepository(Question)
    protected readonly questionRepository: Repository<Question>
  ) {
    super(questionRepository);
  }

  override entityToDto(question: Question): QuestionDto {
    const questionDto: QuestionDto = super.entityToDto(question);

    return questionDto;
  }
}
