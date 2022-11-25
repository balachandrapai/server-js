import { PokemonService } from '../generated/datasources';

export const resolvers = {
    Query: {
        pokemon: async (_: any, { name }: { name: string }) => {
            const pokemon = await PokemonService.getPokemonByName({ name });
            return pokemon;
        }
    }
};
