"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeModule = void 0;
const common_1 = require("@nestjs/common");
const badge_controller_1 = require("./badge.controller");
const badge_service_1 = require("./badge.service");
const typeorm_1 = require("@nestjs/typeorm");
const badge_1 = require("./badge");
const imageUpload_service_1 = require("../common/imageUpload/imageUpload.service");
const imageUpload_1 = require("../common/imageUpload/imageUpload");
let BadgeModule = class BadgeModule {
};
BadgeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([badge_1.Badge, imageUpload_1.default])],
        controllers: [badge_controller_1.BadgeController],
        providers: [badge_service_1.BadgeService, imageUpload_service_1.default]
    })
], BadgeModule);
exports.BadgeModule = BadgeModule;
//# sourceMappingURL=badge.module.js.map