import { ApolloServer } from "apollo-server-micro";
import { readFileSync } from "fs";
import { join } from "path";
import { gql } from "apollo-server-core";
import { data } from "../data";
import {
  Resolvers,
  SortOrder,
  ModelSortField,
  Model,
  Maybe,
} from "../src/generated/graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql(
  readFileSync(join(process.cwd(), "schema.graphql"), { encoding: "utf-8" })
);

const resolvers: Resolvers = {
  Query: {
    findAllBrands: () => data.brands,
    findUniqueBrand: (_: any, args: { id: string }) => {
      return data.brands.find((b) => b.id === args.id) ?? null;
    },
    findBrandModels: (
      _: unknown,
      args: { id: string; sortBy: { field: ModelSortField; order: SortOrder } }
    ): Maybe<Model[]> => {
      const { id, sortBy } = args;

      const models = data.brands.find((brand) => brand.id === id)?.models ?? [];

      const sortedModels = [...models].sort((a, b) => {
        const field = sortBy.field as keyof typeof a;
        const direction = sortBy.order === "ASC" ? 1 : -1;
        return a[field]! > b[field]! ? direction : -direction;
      });

      return sortedModels;
    },
    findUniqueModel: (_: any, args: { brandId: string; modelId: string }) => {
      return (
        data.brands
          .find((b) => b.id === args.brandId)
          ?.models.find((model) => model.id === args.modelId) ?? null
      );
    },
    searchModels: (_: unknown, args: {brandId: string, name: string }): Model[] => {
      const searchTerm = args.name.toLowerCase();

      const allModels = data.brands.find((brand) => brand.id === args.brandId)?.models

      const filteredModels = allModels?.filter((model) =>
        model.name.toLowerCase().startsWith(searchTerm)
      ) ?? [];

      return filteredModels;
    },
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
