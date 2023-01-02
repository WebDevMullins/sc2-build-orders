import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SC2 Build Orders</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="text-2xl">Welcome to SC2 Build Orders</h1>

        <Link href="/builds" className="mt-8">
          Builds
        </Link>
        <Link href="/submit-build" className="m-4">
          Submit a Build
        </Link>
      </main>
    </>
  )
}

export default Home
