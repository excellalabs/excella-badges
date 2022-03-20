import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Badge } from './badge';
import { CreateBadgeDto } from './dtos/create-badge.dto'
import { UpdateBadgeDto } from './dtos/update-badge.dto';
import ImageUploadService from '../common/imageUpload/imageUpload.service';

@Injectable()
export class BadgeService {
    constructor(
        @InjectRepository(Badge) 
        private repo: Repository<Badge>,
        private readonly imageUploadService:ImageUploadService
        ){
        this.repo = repo;
    }

    async createIcon(badgeId: number, imageBuffer: Buffer, filename: string) {
        const icon = await this.imageUploadService.uploadDatabaseFile(imageBuffer, filename);
        await this.repo.update(badgeId, {
          iconId: icon.id
        });
        return icon;
      }

      async createImage(badgeId: number, imageBuffer: Buffer, filename: string) {
        const image = await this.imageUploadService.uploadDatabaseFile(imageBuffer, filename);
        await this.repo.update(badgeId, {
          imageId: image.id
        });
        return image;
      }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne({ where: {id: id}, relations: ['badgeType', 'skill']});
    }

    findByName(name: string){
        return this.repo.find({ where: {name: name}, relations: ['badgeType', 'skill']});
    }
    
    findAll(){
        return this.repo.find(
            {
                join: {
                    alias: "badge",
                    leftJoinAndSelect: {
                        badgeType: "badge.badgeType",
                        skill: "badge.skill",
                    },
                },
            }
        );
    }

    async create(newBadge: CreateBadgeDto) {
        return this.repo.save(this.repo.create(newBadge));
    }
    
    async update(id: number, attrs: Partial<UpdateBadgeDto>) {
        const badge = await this.findOne(id)
        if(!badge){
            console.error('Update: Badge Type not found')
            return null
        }
        Object.assign(badge, attrs);
        badge.id = id
        return this.repo.save(badge);
    }

    async remove(id: number){
        const badge = await this.findOne(id);
        if(!badge){
            console.error('Update: Badge Type not found')
            return null
        }
        return this.repo.delete(id);
    }
}
