import type { AppProps } from 'next/app'
import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
