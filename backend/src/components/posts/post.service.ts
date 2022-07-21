import { Injectable, Scope } from '@nestjs/common';
import { PostModel } from './interfaces/post.model';

@Injectable({ scope: Scope.REQUEST })
export class PostService {
  constructor() {}

  getPosts(): PostModel[] {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
      {
        id: '3',
        title: 'Next.js is so good.',
      },
    ];
  }
}
