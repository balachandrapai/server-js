"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PokemonService {
    /**
     * Get the information about the Pokemon by name
     * @returns Pokemon
     * @throws ApiError
     */
    static getPokemonByName({ name, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/pokemon/{name}',
            path: {
                'name': name,
            },
        });
    }
}
exports.PokemonService = PokemonService;
