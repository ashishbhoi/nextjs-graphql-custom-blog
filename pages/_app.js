import React from 'react';
import {Layout} from '../components/'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../style/global.scss'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
            </>
    )
}

export default MyApp
