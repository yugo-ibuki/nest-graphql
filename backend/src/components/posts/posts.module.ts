import { Module } from '@nestjs/common';
import { PostsResolvers } from './post.resolvers';

@Module({
  providers: [PostsResolvers],
})
export class PostsModule {}
