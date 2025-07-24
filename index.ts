import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { gql } from "apollo-server";
import { data } from "./data";
import type { Resolvers } from "./src/generated/graphql";

const typeDefs = gql(
  readFileSync(join(__dirname, "schema.graphql"), { encoding: "utf-8" })
);

export const resolvers:Resolvers = {
  Query: {
    findAllBrands: () => data.brands,
    findUniqueBrand: (_: any, args: { id: string }) => data.brands.find((b) => b.id === args.id) ?? null,
    findUniqueModel: (_: any, args: { brandId: string, modelId: string }) => data.brands.find((b) => b.id === args.brandId)?.models.find((model) => model.id === args.modelId) ?? null 
    
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
