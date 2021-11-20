import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content="#255adf"/>
                    <link rel="apple-touch-icon" href={`/icons-512.png`} />
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <link rel="icon" href={`/favicon.ico`}/>
                    <link rel="manifest" href={`/manifest.json`} />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;