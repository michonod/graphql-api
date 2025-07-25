import { ApolloServer } from "apollo-server-micro";
import { readFileSync } from "fs";
import { join } from "path";
import { gql } from "apollo-server-core";
import { data } from "../data";
import type { Resolvers } from "../src/generated/graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql(
  readFileSync(join(process.cwd(), "schema.graphql"), { encoding: "utf-8" })
);

const resolvers: Resolvers = {
  Query: {
    findAllBrands: () => data.brands,
    findUniqueBrand: (_: any, args: { id: string }) =>
      data.brands.find((b) => b.id === args.id) ?? null,
    findUniqueModel: (_: any, args: { brandId: string; modelId: string }) =>
      data.brands
        .find((b) => b.id === args.brandId)
        ?.models.find((model) => model.id === args.modelId) ?? null,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  // 👇 this enables the classic GraphQL Playground even in production
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = server.start();

export default async function handler(req: any, res: any) {
  await startServer;
  return server.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
