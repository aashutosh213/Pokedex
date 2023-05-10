import client from '@/apollo_client/client';
import '@/styles/globals.css'

import { ApolloProvider } from '@apollo/client';
// import ApolloClient from 'apollo-boost';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

  ``