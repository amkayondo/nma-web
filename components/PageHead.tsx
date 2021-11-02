import React from 'react'
import Head from 'next/head'

interface PageHeadProps {
    pageName: string
}

const PageHead = ({ pageName }: PageHeadProps) => {
    return (
      <>
        <Head>
          <title>National Merchants Association | {pageName}</title>
          <meta name="description" content=" National Merchants Association" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    );
}

export default PageHead