import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PostService } from './post.service';

@Resolver((of) => PostModel)
export class PostResolver {
  constructor(private PostService: PostService) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async posts() {
    return this.PostService.getPosts();
  }
}
