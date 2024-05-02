import express from "express"

const app = express();

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Sever is running on port", PORT));

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});

import { createHandler } from 'graphql-http/lib/use/http';
app.all('/graphql', createHandler({ schema }));