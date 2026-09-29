// pages/_app.js
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import '../styles/globals.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;