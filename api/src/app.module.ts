import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
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

import { BadgeRequirement } from './badge/badgerequirements/badgerequirement';
import { BadgeRequirementModule } from './badge/badgerequirements/badgerequirement.module';


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
      entities: [User, Capability, Skill, SkillLevel, BadgeType, Badge, BadgeRequirement],
      synchronize: true
    }),
    MulterModule.register({
      dest: './uploads'
    }),
    UserModule,
    CapabilityModule,
    BadgeTypeModule,
    SkillLevelModule,
    BadgeRequirementModule,
    SkillModule,
    BadgeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
