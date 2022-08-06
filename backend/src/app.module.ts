import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './components/posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/environments/env-validator';
import { PbEnvModule } from './config/environments/pb-env.module';
import { PbEnv } from '@pb-config/environments/pb-env.service';

@Module({
  imports: [
    // forRootAsyncじゃないとinjectが使えない。
    // PbENvで環境ごとに設定を切り替える。
    GraphQLModule.forRootAsync({
      inject: [PbEnv],
      useFactory: (env: PbEnv) => env.GqlModuleOptionsFactory,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
    }),
    PostsModule,
    PbEnvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
