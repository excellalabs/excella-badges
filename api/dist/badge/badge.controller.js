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
exports.BadgeController = void 0;
const common_1 = require("@nestjs/common");
const badge_service_1 = require("./badge.service");
const create_badge_dto_1 = require("./dtos/create-badge.dto");
const update_badge_dto_1 = require("./dtos/update-badge.dto");
const platform_express_1 = require("@nestjs/platform-express");
let BadgeController = class BadgeController {
    constructor(badgeService) {
        this.badgeService = badgeService;
    }
    findOne(id) {
        return this.badgeService.findOne(id);
    }
    findByName(name) {
        console.log("finding by name");
        return this.badgeService.findByName(name);
    }
    findAll() {
        return this.badgeService.findAll();
    }
    async create(createDto) {
        return await this.badgeService.create(createDto);
    }
    async addIcon(id, file) {
        console.log("uploading file: ", file);
        return this.badgeService.createIcon(parseInt(id), file.buffer, file.originalname);
    }
    update(id, body) {
        this.badgeService.update(parseInt(id), body);
    }
    delete(id) {
        return this.badgeService.remove(parseInt(id));
    }
};
__decorate([
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BadgeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BadgeController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BadgeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_badge_dto_1.CreateBadgeDto]),
    __metadata("design:returntype", Promise)
], BadgeController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/:id/icon'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BadgeController.prototype, "addIcon", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_badge_dto_1.UpdateBadgeDto]),
    __metadata("design:returntype", void 0)
], BadgeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BadgeController.prototype, "delete", null);
BadgeController = __decorate([
    (0, common_1.Controller)('badge'),
    __metadata("design:paramtypes", [badge_service_1.BadgeService])
], BadgeController);
exports.BadgeController = BadgeController;
//# sourceMappingURL=badge.controller.js.map