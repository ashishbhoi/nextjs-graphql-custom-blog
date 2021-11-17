import React from 'react';
import {Layout} from '../components/'
import 'tailwindcss/tailwind.css'
import '../style/global.scss'

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
