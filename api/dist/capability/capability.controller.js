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
let CapabilityController = class CapabilityController {
    constructor(capabilityService) {
        this.capabilityService = capabilityService;
    }
    async create(newCapability) {
        return await this.capabilityService.create(newCapability);
    }
    getAllCapabilities() {
        return this.capabilityService.findAll();
    }
    removeUser(id) {
        return this.capabilityService.remove(parseInt(id));
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_capability_dto_1.CreateCapabilityDto]),
    __metadata("design:returntype", Promise)
], CapabilityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "getAllCapabilities", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CapabilityController.prototype, "removeUser", null);
CapabilityController = __decorate([
    (0, common_1.Controller)('capability'),
    __metadata("design:paramtypes", [capability_service_1.CapabilityService])
], CapabilityController);
exports.CapabilityController = CapabilityController;
//# sourceMappingURL=capability.controller.js.map