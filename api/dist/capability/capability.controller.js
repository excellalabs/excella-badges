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
exports.CapabilityController = void 0;
const common_1 = require("@nestjs/common");
const capability_service_1 = require("./capability.service");
const create_capability_dto_1 = require("./dtos/create-capability.dto");
const update_capability_dto_1 = require("./dtos/update-capability.dto");
let CapabilityController = class CapabilityController {
    constructor(capabilityService) {
        this.capabilityService = capabilityService;
    }
    findOne(id) {
        return this.capabilityService.findOne(id);
    }
    findByName(name) {
        console.log("finding by name");
        return this.capabilityService.findByName(name);
    }
    findAll() {
        return this.capabilityService.findAll();
    }
    async create(createDto) {
        return await this.capabilityService.create(createDto);
    }
    update(id, body) {
        this.capabilityService.update(parseInt(id), body);
    }
    delete(id) {
        return this.capabilityService.remove(parseInt(id));
    }
};
__decorate([
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_capability_dto_1.CreateCapabilityDto]),
    __metadata("design:returntype", Promise)
], CapabilityController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_capability_dto_1.UpdateCapabilityDto]),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "delete", null);
CapabilityController = __decorate([
    (0, common_1.Controller)('capability'),
    __metadata("design:paramtypes", [capability_service_1.CapabilityService])
], CapabilityController);
exports.CapabilityController = CapabilityController;
//# sourceMappingURL=capability.controller.js.map