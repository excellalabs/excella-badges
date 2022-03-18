"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillLevelModule = void 0;
const common_1 = require("@nestjs/common");
const skilllevel_controller_1 = require("./skilllevel.controller");
const skilllevel_service_1 = require("./skilllevel.service");
const typeorm_1 = require("@nestjs/typeorm");
const skilllevel_1 = require("./skilllevel");
let SkillLevelModule = class SkillLevelModule {
};
SkillLevelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([skilllevel_1.SkillLevel])],
        controllers: [skilllevel_controller_1.SkillLevelController],
        providers: [skilllevel_service_1.SkillLevelService]
    })
], SkillLevelModule);
exports.SkillLevelModule = SkillLevelModule;
//# sourceMappingURL=skilllevel.module.js.map