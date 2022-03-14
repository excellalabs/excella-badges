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
exports.CapabilityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const capability_1 = require("./capability");
let CapabilityService = class CapabilityService {
    constructor(repo) {
        this.repo = repo;
        this.repo = repo;
    }
    async create(newCapability) {
        return this.repo.save(this.repo.create(newCapability));
    }
    findOne(id) {
        if (!id)
            return null;
        return this.repo.findOne(id);
    }
    findByName(name) {
        return this.repo.find({ name });
    }
    findAll() {
        return this.repo.find();
    }
    async remove(id) {
        const capability = await this.findOne(id);
        if (!capability) {
            console.error('Update: capability not found');
            return null;
        }
        return this.repo.delete(id);
    }
};
CapabilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(capability_1.Capability)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CapabilityService);
exports.CapabilityService = CapabilityService;
//# sourceMappingURL=capability.service.js.map