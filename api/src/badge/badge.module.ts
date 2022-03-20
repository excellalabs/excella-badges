
import { Module } from '@nestjs/common';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Badge } from './badge';
import ImageUploadService from '../common/imageUpload/imageUpload.service'
import ImageFile from '../common/imageUpload/imageUpload';

@Module({
  imports: [TypeOrmModule.forFeature([Badge, ImageFile])],
  controllers: [BadgeController],
  providers: [BadgeService, ImageUploadService]
})
export class BadgeModule {}
