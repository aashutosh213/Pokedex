import { gql } from '@apollo/client';
import client from '../apollo_client/client';

import EvolutionQuery from '../queries/EvolutionQuery.gql';

export async function EvolutionData(id) {
  const { data } = await client.query({
    query: gql`${EvolutionQuery}`,
    variables: {
      id,
    },
  });

  return {
    evolutions: data,
  };
}
