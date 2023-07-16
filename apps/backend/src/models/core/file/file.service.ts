import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { File } from "./entity/file.entity";

import * as fs from "fs";

@Injectable()
export class FileService {
  private fileRepository: Repository<File>;

  constructor(@InjectRepository(File) repository: Repository<File>) {
    this.fileRepository = repository;
  }

  async storeFilename(file: Express.Multer.File) {
    const entity = this.fileRepository.create({
      storedFilename: file.filename,
      originalFilename: file.originalname,
    });
    await this.fileRepository.save(entity);

    return entity;
  }

  async getFile(id: number) {
    const entity = this.fileRepository.findOneOrFail({
      where: { id: id },
    });
    return entity;
  }

  async deleteFile(id: number) {
    try {
      const entity = await this.fileRepository.findOneOrFail({
        where: { id: id },
      });

      this.fileRepository.delete(entity.id);
      fs.unlinkSync(`uploads/${entity.storedFilename}`);
    } catch {}
  }
}
