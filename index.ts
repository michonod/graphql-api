import { ApolloServer, gql } from 'apollo-server-micro'
import { readFileSync } from 'fs'
import { join } from 'path'
import { data } from './data'
import type { Resolvers } from './src/generated/graphql'

const typeDefs = gql(
  readFileSync(join(process.cwd(), 'schema.graphql'), { encoding: 'utf-8' })
)

export const resolvers: Resolvers = {
  Query: {
    findAllBrands: () => data.brands,
    findUniqueBrand: (_: any, args: { id: string }) =>
      data.brands.find((b) => b.id === args.id) ?? null,
    findUniqueModel: (_: any, args: { brandId: string; modelId: string }) =>
      data.brands.find((b) => b.id === args.brandId)?.models.find((model) => model.id === args.modelId) ?? null,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

// Use plain types or `any` — do not try to import from @vercel/node
export default async function handler(req: any, res: any) {
  await startServer
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}