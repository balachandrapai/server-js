"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGraphQLServer = void 0;
const node_1 = require("@graphql-yoga/node");
const schema_1 = require("@graphql-tools/schema");
const schema_2 = require("@server-js/schema");
const resolvers_1 = require("./resolvers");
const initializeGraphQLServer = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const typeDefs = yield (0, schema_2.getTypeDefs)();
    const schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers: resolvers_1.resolvers });
    const server = (0, node_1.createServer)({
        schema: schema,
        maskedErrors: false,
        logging: false,
    });
    app.use('/graphql', server);
    console.log(`GraphQL Server started at ${server.getAddressInfo().endpoint}`);
});
exports.initializeGraphQLServer = initializeGraphQLServer;
