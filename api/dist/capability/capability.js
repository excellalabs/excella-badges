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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capability = void 0;
const typeorm_1 = require("typeorm");
const skill_1 = require("../skill/skill");
let Capability = class Capability {
    logEvent() {
        console.log("New capability created: ", this.name);
    }
    logUpdate() {
        console.log("Updated capability with id: ", this.id);
    }
    logRemove() {
        console.log("Removed capability ", this.name);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Capability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Capability.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => skill_1.Skill, skill => skill.capability),
    __metadata("design:type", Array)
], Capability.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Capability.prototype, "logEvent", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Capability.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Capability.prototype, "logRemove", null);
Capability = __decorate([
    (0, typeorm_1.Entity)()
], Capability);
exports.Capability = Capability;
//# sourceMappingURL=capability.js.map