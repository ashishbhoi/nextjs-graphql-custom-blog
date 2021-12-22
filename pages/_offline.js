import React from 'react'
import Head from 'next/head'

export default function _offline() {
    return (
        <>
            <Head>
                <title>No Internet</title>
            </Head>
            <div>
                <h1>No Internet, please connect to your internet.</h1>
            </div>
        </>
    )
}