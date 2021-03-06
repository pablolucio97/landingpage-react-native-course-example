import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="pablosilvadev" key="description" />
                    <meta name="keywords" content="pablosilvadev " key="keywords" />
                    <meta name="author" content="pablosilvadev" key="author" />
                    <meta name="theme-color" content="#000000" key="theme-color" />
                    <link rel="preload" as="font"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}