import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query(() => Boolean)
  isUser(): boolean {
    return true;
  }
}
