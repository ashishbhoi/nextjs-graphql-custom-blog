import Document, { Html, Head} from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="author" content="Ashish Kumar Bhoi"/>
                    <meta name="theme-color" content="#255adf"/>
                    <link rel="apple-touch-icon" href={`/icons-512.png`} />
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <link rel="icon" href={`/favicon.ico`}/>
                    <link rel="manifest" href={`/manifest.json`} />
                    <title>Offline | Personal Blog</title>
                </Head>
                <body>
                <h1>The Page is Offline Please connect to internet</h1>
                </body>
            </Html>
        )
    }
}

export default MyDocument;