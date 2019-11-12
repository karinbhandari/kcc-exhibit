import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';
import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta title="Kcc Exhibit"/>
            <meta title="Kantipur City College Exhibit"/>
            <meta title="Kcc Exhibit default Website"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            <meta name="description" content="Kantipur City Colege." />
            <meta name="description" content="Kantipur City Colege Exhibit Program." />

            {/* Facebbook */}
            <meta property="og:title" content="Kantipur City College Exhibit Program" />
            <meta property="og:type" content="Website" />
            <meta property="og:description" content="KCC Exhibit is a Project Exhibition & Seminar; Kantipur City College has been organizing in its premises since 2001. The prime objective of this project exhibition and seminar is to promote the students’ projects and to interact with various industries, organizations and academic institutions so as to promote academic standard and sustainability. ." />
            <meta property="og:image" content="../static/images/logo/kcc-logo.png" />
            <meta property="og:url" content="https://kcc-exhibit.tk" />

            <link rel="icon" sizes="42x42" href="../static/images/logo/kcc-logo.ico" />
            {/* PWA primary color */}
            <meta name="theme-color" content={theme.palette.primary.main} />
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
