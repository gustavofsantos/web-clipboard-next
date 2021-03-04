import '../../styles/globals.css'
import { AuthenticationProvider } from '../contexts/auth-context'

export default function App({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  )
}
