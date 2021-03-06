"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityModule = void 0;
const common_1 = require("@nestjs/common");
const capability_controller_1 = require("./capability.controller");
const capability_service_1 = require("./capability.service");
const typeorm_1 = require("@nestjs/typeorm");
const capability_1 = require("./capability");
let CapabilityModule = class CapabilityModule {
};
CapabilityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([capability_1.Capability])],
        controllers: [capability_controller_1.CapabilityController],
        providers: [capability_service_1.CapabilityService]
    })
], CapabilityModule);
exports.CapabilityModule = CapabilityModule;
//# sourceMappingURL=capability.module.js.map