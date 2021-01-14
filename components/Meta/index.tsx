import React from 'react'
import Head from 'next/head'

const Meta: React.FC = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#3396FF"
      />
      <meta name="msapplication-TileColor" content="#3396FF" />
      <meta name="theme-color" content="#3396FF" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&family=Ubuntu:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default Meta
