import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
import { ConfigModule } from '@nestjs/config';

import { User } from './user/user';

import { Capability } from './capability/capability';
import { CapabilityModule } from './capability/capability.module';

import { Badge } from './badge/badge';
import { BadgeModule } from './badge/badge.module';

import { Skill } from './skill/skill';
import { SkillModule } from './skill/skill.module';

import { BadgeType } from './badgetype/badgetype';
import { BadgeTypeModule } from './badgetype/badgetype.module';

import { SkillLevel } from './skilllevel/skilllevel'
import { SkillLevelModule } from './skilllevel/skilllevel.module';

import ImageFile from './common/imageUpload/imageUpload';
import ImageUploadService from './common/imageUpload/imageUpload.service'


import { BadgerequirementsModule } from './badgerequirements/badgerequirements.module';

import { AchievementsModule } from './achievements/achievements.module';

import { AchievementschecklistModule } from './achievementschecklist/achievementschecklist.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env/development.env',
    }),
    SessionModule.forRoot({
      session: { secret: 'excellarulz' },
    }),
    // SessionModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [Config],
    //   //              TIP: to get autocomplete in return object
    //   //                  add `NestSessionOptions` here ↓↓↓
    //   useFactory: async (config: Config): Promise<NestSessionOptions> => {
    //     return {
    //       session: { secret: config.secret },
    //     };
    //   },
    // }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Capability, Skill, SkillLevel, BadgeType, Badge, ImageFile],
      synchronize: true
    }),
    UserModule,
    CapabilityModule,
    BadgeTypeModule,
    SkillLevelModule,
    BadgerequirementsModule,
    AchievementsModule,
    AchievementschecklistModule,
    SkillModule,
    BadgeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
