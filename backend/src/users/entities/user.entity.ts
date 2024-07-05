import { Field, ObjectType } from '@nestjs/graphql';

// https://docs.nestjs.com/graphql/resolvers#object-types
@ObjectType()
export class User {
  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;
}
