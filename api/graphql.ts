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
import Cors from "micro-cors";

const cors = Cors({
  origin: "*", // allow all origins for dev; change in prod
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
});

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
    searchModels: (
      _: unknown,
      args: { brandId: string; name: string }
    ): Model[] => {
      const searchTerm = args.name.toLowerCase();

      const allModels = data.brands.find(
        (brand) => brand.id === args.brandId
      )?.models;

      const filteredModels =
        allModels?.filter((model) =>
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
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = server.start();

async function handler(req: any, res: any) {
  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.statusCode = 200;
    res.end();
    return;
  }

  // For all other requests, set CORS headers and run Apollo server
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  await startServer;
  return server.createHandler({ path: "/api/graphql" })(req, res);
}

export default cors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
