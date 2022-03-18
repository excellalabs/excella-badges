"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_session_1 = require("nestjs-session");
const config_1 = require("@nestjs/config");
const user_1 = require("./user/user");
const capability_1 = require("./capability/capability");
const capability_module_1 = require("./capability/capability.module");
const badge_module_1 = require("./badge/badge.module");
const badgetype_1 = require("./badgetype/badgetype");
const badgetype_module_1 = require("./badgetype/badgetype.module");
const skilllevel_1 = require("./skilllevel/skilllevel");
const skilllevel_module_1 = require("./skilllevel/skilllevel.module");
const badgerequirements_module_1 = require("./badgerequirements/badgerequirements.module");
const achievements_module_1 = require("./achievements/achievements.module");
const achievementschecklist_module_1 = require("./achievementschecklist/achievementschecklist.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: './env/development.env',
            }),
            nestjs_session_1.SessionModule.forRoot({
                session: { secret: 'excellarulz' },
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                entities: [user_1.User, capability_1.Capability, skilllevel_1.SkillLevel, badgetype_1.BadgeType],
                synchronize: true
            }),
            user_module_1.UserModule,
            badge_module_1.BadgeModule,
            capability_module_1.CapabilityModule,
            badgetype_module_1.BadgeTypeModule,
            skilllevel_module_1.SkillLevelModule,
            badgerequirements_module_1.BadgerequirementsModule,
            achievements_module_1.AchievementsModule,
            achievementschecklist_module_1.AchievementschecklistModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map