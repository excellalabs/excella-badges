"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillLevelController = void 0;
const common_1 = require("@nestjs/common");
const skilllevel_service_1 = require("./skilllevel.service");
const create_skilllevel_dto_1 = require("./dtos/create-skilllevel.dto");
const update_skilllevel_dto_1 = require("./dtos/update-skilllevel.dto");
let SkillLevelController = class SkillLevelController {
    constructor(skillLevelService) {
        this.skillLevelService = skillLevelService;
    }
    findOne(id) {
        return this.skillLevelService.findOne(id);
    }
    findByName(name) {
        console.log("finding by name");
        return this.skillLevelService.findByName(name);
    }
    findAll() {
        return this.skillLevelService.findAll();
    }
    async create(createDto) {
        return await this.skillLevelService.create(createDto);
    }
    update(id, body) {
        this.skillLevelService.update(parseInt(id), body);
    }
    delete(id) {
        return this.skillLevelService.remove(parseInt(id));
    }
};
__decorate([
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SkillLevelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillLevelController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillLevelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_skilllevel_dto_1.CreateSkillLevelDto]),
    __metadata("design:returntype", Promise)
], SkillLevelController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_skilllevel_dto_1.UpdateSkillLevelDto]),
    __metadata("design:returntype", void 0)
], SkillLevelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillLevelController.prototype, "delete", null);
SkillLevelController = __decorate([
    (0, common_1.Controller)('skilllevel'),
    __metadata("design:paramtypes", [skilllevel_service_1.SkillLevelService])
], SkillLevelController);
exports.SkillLevelController = SkillLevelController;
//# sourceMappingURL=skilllevel.controller.js.map