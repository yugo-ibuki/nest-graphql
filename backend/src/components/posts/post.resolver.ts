import { ConfigService } from '@nestjs/config';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PostService } from './post.service';

@Resolver((of) => PostModel)
export class PostResolver {
  constructor(
    private configService: ConfigService,
    private PostService: PostService,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async posts() {
    return this.PostService.getPosts();
  }

  @Query(() => String)
  helloConfiguration() {
    const nodeEnv = this.configService.get<string>('NODE_ENV'); // development （.env.development.localのもの）
    const databaseUrl = this.configService.get<string>('DATABASE_URL'); // postgresql:/... （.env.development.localのもの）
    const microCmsKey = this.configService.get<string>('MICRO_CMS_KEY'); // 1234567890（環境変数のもの）
  }
}
