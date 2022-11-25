import { GraphQLResolveInfo } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Pokemon = {
    __typename?: 'Pokemon';
    height?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    sprites?: Maybe<Sprite>;
    weight?: Maybe<Scalars['Int']>;
};
export declare type Query = {
    __typename?: 'Query';
    pokemon?: Maybe<Pokemon>;
};
export declare type QueryPokemonArgs = {
    name?: InputMaybe<Scalars['String']>;
};
export declare type Sprite = {
    __typename?: 'Sprite';
    back_default?: Maybe<Scalars['String']>;
    back_female?: Maybe<Scalars['String']>;
    back_shiny?: Maybe<Scalars['String']>;
    back_shiny_female?: Maybe<Scalars['String']>;
    front_default?: Maybe<Scalars['String']>;
    front_female?: Maybe<Scalars['String']>;
    front_shiny?: Maybe<Scalars['String']>;
    front_shiny_female?: Maybe<Scalars['String']>;
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Pokemon: ResolverTypeWrapper<Pokemon>;
    Query: ResolverTypeWrapper<{}>;
    Sprite: ResolverTypeWrapper<Sprite>;
    String: ResolverTypeWrapper<Scalars['String']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    Boolean: Scalars['Boolean'];
    Int: Scalars['Int'];
    Pokemon: Pokemon;
    Query: {};
    Sprite: Sprite;
    String: Scalars['String'];
};
export declare type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
    height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sprites?: Resolver<Maybe<ResolversTypes['Sprite']>, ParentType, ContextType>;
    weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, Partial<QueryPokemonArgs>>;
};
export declare type SpriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sprite'] = ResolversParentTypes['Sprite']> = {
    back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    back_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    back_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    back_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    front_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
    Pokemon?: PokemonResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Sprite?: SpriteResolvers<ContextType>;
};
