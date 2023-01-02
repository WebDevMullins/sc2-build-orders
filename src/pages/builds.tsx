import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { trpc } from '../utils/trpc'

const BuildsPage: NextPage = () => {
  const builds = trpc.builds.getBuild.useQuery()

  return (
    <>
      <Head>
        <title>Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4">
        <h1 className="text-xl">Builds</h1>
        <Link href="/" className="m-8">
          Home Page
        </Link>

        {builds.data?.map((build) => (
          <ul key={build.id} className="flex items-center justify-center gap-4">
            <li>{build.title}</li>
            <li>{build.build}</li>
            <li>{build.matchup}</li>
          </ul>
        ))}
      </main>
    </>
  )
}

export default BuildsPage
