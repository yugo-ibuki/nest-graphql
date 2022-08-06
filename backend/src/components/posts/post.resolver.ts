import { ConfigService } from '@nestjs/config';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PostService } from './post.service';
import { PbEnv } from '../../config/environments/pb-env.service';

@Resolver((of) => PostModel)
export class PostResolver {
  constructor(
    private configService: ConfigService,
    private PostService: PostService,
    private pbEnv: PbEnv,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async posts() {
    return this.PostService.getPosts();
  }

  @Query(() => String)
  helloEnv(): string {
    return this.pbEnv.DatabaseUrl;
  }
}
