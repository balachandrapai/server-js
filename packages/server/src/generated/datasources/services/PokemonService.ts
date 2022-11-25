/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pokemon } from '../models/Pokemon';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonService {

  /**
   * Get the information about the Pokemon by name
   * @returns Pokemon
   * @throws ApiError
   */
  public static getPokemonByName({
    name,
  }: {
    /** Pokemon name **/
    name: string,
  }): CancelablePromise<Pokemon> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pokemon/{name}',
      path: {
        'name': name,
      },
    });
  }

}