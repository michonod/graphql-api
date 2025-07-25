import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Brand = {
  __typename?: 'Brand';
  categories?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Model>>;
  name?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
};

export type Model = {
  __typename?: 'Model';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  musicians?: Maybe<Array<Musician>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  specs: Specs;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ModelSortField {
  Name = 'name',
  Price = 'price',
  Type = 'type'
}

export type Musician = {
  __typename?: 'Musician';
  bands?: Maybe<Array<Scalars['String']['output']>>;
  musicianImage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAllBrands: Array<Brand>;
  findBrandModels?: Maybe<Array<Maybe<Model>>>;
  findUniqueBrand?: Maybe<Brand>;
  findUniqueModel?: Maybe<Model>;
  searchModels: Array<Model>;
};


export type QueryFindBrandModelsArgs = {
  id: Scalars['ID']['input'];
  sortBy: SortBy;
};


export type QueryFindUniqueBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindUniqueModelArgs = {
  brandId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
};


export type QuerySearchModelsArgs = {
  brandId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Specs = {
  __typename?: 'Specs';
  bodyWood?: Maybe<Scalars['String']['output']>;
  bridge?: Maybe<Scalars['String']['output']>;
  fingerboardWood?: Maybe<Scalars['String']['output']>;
  neckWood?: Maybe<Scalars['String']['output']>;
  pickups?: Maybe<Scalars['String']['output']>;
  scaleLength?: Maybe<Scalars['String']['output']>;
  tuners?: Maybe<Scalars['String']['output']>;
};

export type SortBy = {
  field: ModelSortField;
  order: SortOrder;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Brand: ResolverTypeWrapper<Brand>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Model: ResolverTypeWrapper<Model>;
  ModelSortField: ModelSortField;
  Musician: ResolverTypeWrapper<Musician>;
  Query: ResolverTypeWrapper<{}>;
  SortOrder: SortOrder;
  Specs: ResolverTypeWrapper<Specs>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  sortBy: SortBy;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Brand: Brand;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Model: Model;
  Musician: Musician;
  Query: {};
  Specs: Specs;
  String: Scalars['String']['output'];
  sortBy: SortBy;
};

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  categories?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  models?: Resolver<Maybe<Array<ResolversTypes['Model']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  musicians?: Resolver<Maybe<Array<ResolversTypes['Musician']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  specs?: Resolver<ResolversTypes['Specs'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicianResolvers<ContextType = any, ParentType extends ResolversParentTypes['Musician'] = ResolversParentTypes['Musician']> = {
  bands?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  musicianImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAllBrands?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  findBrandModels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Model']>>>, ParentType, ContextType, RequireFields<QueryFindBrandModelsArgs, 'id' | 'sortBy'>>;
  findUniqueBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryFindUniqueBrandArgs, 'id'>>;
  findUniqueModel?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<QueryFindUniqueModelArgs, 'brandId' | 'modelId'>>;
  searchModels?: Resolver<Array<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<QuerySearchModelsArgs, 'brandId' | 'name'>>;
};

export type SpecsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Specs'] = ResolversParentTypes['Specs']> = {
  bodyWood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bridge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fingerboardWood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neckWood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickups?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scaleLength?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tuners?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Brand?: BrandResolvers<ContextType>;
  Model?: ModelResolvers<ContextType>;
  Musician?: MusicianResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Specs?: SpecsResolvers<ContextType>;
};

