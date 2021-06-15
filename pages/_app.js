import '../styles/globals.css';
import Head from 'next/head';
import {Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '../css/style.css';

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
