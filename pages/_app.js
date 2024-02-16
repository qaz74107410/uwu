import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    palette: {
      type: 'light'
    }
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>KomKom_Pandora Social 😎</title>
        <meta name="description" content="Social link of KomKom" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline enableColorScheme /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
