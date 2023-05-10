import { gql } from 'apollo-boost';
import { ApolloClient, InMemoryCache} from '@apollo/client';

import PokemonsQuery from '../../queries/PokemonsQuery.gql';
import client from '@/apollo_client/client';


const Pokemons_Query = gql`${PokemonsQuery}`;

export default async function handler(req, res) {
;
      const Client = client;

    try {
     const { data } = await Client.query({
        query: Pokemons_Query,
        variables: {
            first : 999,
        },
     });

    res.status(200).json(data);
    }catch(err) {
        res.status(500).json({error: err});
    }
  };
  