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
exports.BadgeTypeController = void 0;
const common_1 = require("@nestjs/common");
const badgetype_service_1 = require("./badgetype.service");
const create_badgetype_dto_1 = require("./dtos/create-badgetype.dto");
const update_badgetype_dto_1 = require("./dtos/update-badgetype.dto");
let BadgeTypeController = class BadgeTypeController {
    constructor(badgeTypeService) {
        this.badgeTypeService = badgeTypeService;
    }
    findOne(id) {
        return this.badgeTypeService.findOne(id);
    }
    findByName(name) {
        console.log("finding by name");
        return this.badgeTypeService.findByName(name);
    }
    findAll() {
        return this.badgeTypeService.findAll();
    }
    async create(createDto) {
        return await this.badgeTypeService.create(createDto);
    }
    update(id, body) {
        this.badgeTypeService.update(parseInt(id), body);
    }
    delete(id) {
        return this.badgeTypeService.remove(parseInt(id));
    }
};
__decorate([
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BadgeTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BadgeTypeController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BadgeTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_badgetype_dto_1.CreateBadgeTypeDto]),
    __metadata("design:returntype", Promise)
], BadgeTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_badgetype_dto_1.UpdateBadgeTypeDto]),
    __metadata("design:returntype", void 0)
], BadgeTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BadgeTypeController.prototype, "delete", null);
BadgeTypeController = __decorate([
    (0, common_1.Controller)('badgetype'),
    __metadata("design:paramtypes", [badgetype_service_1.BadgeTypeService])
], BadgeTypeController);
exports.BadgeTypeController = BadgeTypeController;
//# sourceMappingURL=badgetype.controller.js.map