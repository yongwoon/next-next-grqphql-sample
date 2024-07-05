import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreateUserDto } from './dto/cerate-user.dto';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  users(@Args('username') username: string): User[] {
    console.log(username);
    return [];
  }

  @Mutation(() => Boolean)
  createUser(@Args() createUserDto: CreateUserDto): boolean {
    console.log(createUserDto);
    return true;
  }
}
