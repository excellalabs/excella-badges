import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
import { ConfigModule } from '@nestjs/config';

import { User } from './user/user';

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
      entities: [User],
      synchronize: true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
