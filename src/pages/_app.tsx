import '../../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { AuthenticationProvider } from '../contexts/auth-context'
import Head from 'next/head'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clipboard</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <Component {...pageProps} />
        </AuthenticationProvider>
      </QueryClientProvider>
    </>
  )
}
