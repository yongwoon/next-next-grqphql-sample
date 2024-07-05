import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // https://docs.nestjs.com/graphql/quick-start#code-first
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true, // true: Browser から GraphQL Playground にアクセスできる
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // autoSchemaFile: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
