import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import type { Context } from '@/utils/graphql'
import { CreatePostInput } from '@/resolvers/types/CreatePostInput'
import { ListPostsInput, PostSortField, SortDirection } from '@/resolvers/types/ListPostsInput'
import { Post } from '@/resolvers/types/Post' // adjust path to your type

@Resolver()
export class PostResolver {
  // NEW: public find one by id
  @Query(() => Post, { nullable: true })
  async findPostById(@Ctx() ctx: Context, @Arg('id') id: string): Promise<Post | null> {
    return await ctx.postService.findOneById(id)
  }

  @Query(() => [Post])
  async findManyPosts(
    @Ctx() ctx: Context,
    @Arg('input', () => ListPostsInput, { nullable: true }) input?: ListPostsInput,
  ): Promise<Post[]> {
    return ctx.postService.findMany({
      search: input?.search,
      skip: input?.skip,
      take: input?.take,
      sortField: input?.sortField ?? PostSortField.CreatedAt,
      sortDirection: input?.sortDirection ?? SortDirection.Desc,
    })
  }
}
