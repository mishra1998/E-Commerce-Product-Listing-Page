import Head from 'next/head';
import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import store from "../store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )

}