import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [PostResolver, PostService, ConfigService],
})
export class PostsModule {}
