import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
import { ConfigModule } from '@nestjs/config';

import { User } from './user/user';

import { Category } from './category/category';
import { CategoryModule } from './category/category.module';

import { Capability } from './capability/capability';
import { CapabilityModule } from './capability/capability.module';

import { BadgeModule } from './badge/badge.module';

import { BadgetypeModule } from './badgetype/badgetype.module';

import { SkilllevelController } from './skilllevel/skilllevel.controller';
import { SkilllevelModule } from './skilllevel/skilllevel.module';

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
      entities: [User, Category, Capability],
      synchronize: true
    }),
    UserModule,
    BadgeModule,
    CategoryModule,
    CapabilityModule,
    BadgetypeModule,
    SkilllevelModule,
    BadgerequirementsModule,
    AchievementsModule,
    AchievementschecklistModule
  ],
  controllers: [
    AppController, 
    SkilllevelController],
  providers: [AppService],
})
export class AppModule {}
