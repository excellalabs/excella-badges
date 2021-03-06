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
exports.BadgeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const badge_1 = require("./badge");
let BadgeService = class BadgeService {
    constructor(repo) {
        this.repo = repo;
        this.repo = repo;
    }
    findOne(id) {
        if (!id)
            return null;
        return this.repo.findOne({ where: { id: id }, relations: ['badgeType', 'skill'] });
    }
    findByName(name) {
        return this.repo.find({ where: { name: name }, relations: ['badgeType', 'skill'] });
    }
    findAll() {
        return this.repo.find({
            join: {
                alias: "badge",
                leftJoinAndSelect: {
                    badgeType: "badge.badgeType",
                    skill: "badge.skill",
                },
            },
        });
    }
    async create(newBadge) {
        return this.repo.save(this.repo.create(newBadge));
    }
    async update(id, attrs) {
        const badge = await this.findOne(id);
        console.log("found badge = ", badge);
        if (!badge) {
            console.error('Update: Badge not found');
            return null;
        }
        Object.assign(badge, attrs);
        badge.id = id;
        console.log("updating badge = ", badge);
        return this.repo.save(badge);
    }
    async remove(id) {
        const badge = await this.findOne(id);
        if (!badge) {
            console.error('Update: Badge not found');
            return null;
        }
        return this.repo.delete(id);
    }
};
BadgeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(badge_1.Badge)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BadgeService);
exports.BadgeService = BadgeService;
//# sourceMappingURL=badge.service.js.map