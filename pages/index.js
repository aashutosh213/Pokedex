import Image from 'next/image'
import { Inter } from 'next/font/google'
import { poke } from '@/utils/data';
import { ApolloProvider, ApolloClient, InMemoryCache  } from '@apollo/client';
// import ApolloClient from 'apollo-boost';
import client from './apollo_client/client';

// import heads from './components/heads';
import {search} from './components/search';

import {PokeItem} from './components/poke_item';
import Heads from './components/heads';
// import poke from "../utils/data";  

const inter = Inter({ subsets: ['latin'] })


export default function Home({ Component, pageProps }) {
  // console.log(poke);
  return (
    <main className="flex flex-col ">
      <div className='' >
        <Heads /> 
      </div>

      <div className='mt-10 px-20'>
        <div className=''>
          <ApolloProvider client={client}>
            <PokeItem {...pageProps} />
          </ApolloProvider>
        </div>
      </div>
    </main>
  )
}
