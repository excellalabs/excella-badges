import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ImageFile from './imageUpload';
 
@Injectable()
class ImageUploadService {
  constructor(
    @InjectRepository(ImageFile)
    private databaseFilesRepository: Repository<ImageFile>,
  ) {}
 
  async uploadDatabaseFile(dataBuffer: Buffer, filename: string) {
    const newFile = await this.databaseFilesRepository.create({
      filename,
      data: dataBuffer
    })
    await this.databaseFilesRepository.save(newFile);
    return newFile;
  }
 
  async getFileById(fileId: number) {
    const file = await this.databaseFilesRepository.findOne(fileId);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }
}
 
export default ImageUploadService;