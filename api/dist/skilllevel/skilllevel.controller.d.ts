import { SkillLevelService } from './skilllevel.service';
import { CreateSkillLevelDto } from './dtos/create-skilllevel.dto';
import { UpdateSkillLevelDto } from './dtos/update-skilllevel.dto';
export declare class SkillLevelController {
    private skillLevelService;
    constructor(skillLevelService: SkillLevelService);
    findOne(id: number): Promise<import("./skilllevel").SkillLevel>;
    findByName(name: string): Promise<import("./skilllevel").SkillLevel[]>;
    findAll(): Promise<import("./skilllevel").SkillLevel[]>;
    create(createDto: CreateSkillLevelDto): Promise<import("./skilllevel").SkillLevel>;
    update(id: string, body: UpdateSkillLevelDto): void;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
