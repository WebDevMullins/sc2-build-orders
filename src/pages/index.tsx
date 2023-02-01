import { type NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const [race, setRace] = useState('')
  const [raceOpponent, setRaceOpponent] = useState('')
  const isButtonDisabled = race.length === 0 || raceOpponent.length === 0

  function handleRace(e: React.MouseEvent) {
    e.preventDefault()
    setRace((e.target as HTMLInputElement).id)
  }

  function handleRaceOpponent(e: React.MouseEvent) {
    e.preventDefault()
    setRaceOpponent((e.target as HTMLInputElement).id)
  }

  function handleMatchup(e: React.FormEvent) {
    e.preventDefault()
    router.push(
      `/matchups/${race.toLowerCase()}/vs/${raceOpponent.toLowerCase()}`
    )
  }

  return (
    <>
      <Head>
        <title>SC2 Build Orders</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-auto flex h-screen flex-col justify-center p-12">
        {/* <h1 className="text-2xl">Welcome to SC2 Build Orders</h1> */}
        <div className="flex justify-center p-12">
          <form>
            <h2 className="flex flex-col items-center text-xl">Your Race</h2>
            <div className="flex items-center">
              <input
                className={
                  race === 'terran' || race.length === 0 ? '' : 'grayscale'
                }
                type="image"
                id="terran"
                value={race}
                onClick={handleRace}
                src="/images/terran.png"
                alt="terran"
                width="200"
                height="auto"
              />
              <input
                className={
                  race === 'protoss' || race.length === 0 ? '' : 'grayscale'
                }
                type="image"
                id="protoss"
                value={race}
                onClick={handleRace}
                src="/images/protoss.png"
                alt="protoss"
                width="auto"
                height="200"
              />
              <input
                className={
                  race === 'zerg' || race.length === 0 ? '' : 'grayscale'
                }
                type="image"
                id="zerg"
                value={race}
                onClick={handleRace}
                src="/images/zerg.png"
                alt="zerg"
                width="200"
                height="auto"
              />
            </div>
            <div className="my-8 inline-flex w-full items-center justify-center">
              <hr className="h-1 w-full border-0 bg-gray-light" />
              <span className="absolute left-1/2 -translate-x-1/2 bg-gray-dark px-3 text-4xl font-medium">
                VS
              </span>
            </div>

            <h2 className="mt-8 flex flex-col items-center text-xl">
              Opponent&apos;s Race
            </h2>
            <div className="flex items-center">
              <input
                className={
                  raceOpponent === 'terran' || raceOpponent.length === 0
                    ? ''
                    : 'grayscale'
                }
                type="image"
                id="terran"
                value={raceOpponent}
                onClick={handleRaceOpponent}
                src="/images/terran.png"
                alt="terran"
                width="200"
                height="auto"
              />
              <input
                className={
                  raceOpponent === 'protoss' || raceOpponent.length === 0
                    ? ''
                    : 'grayscale'
                }
                type="image"
                id="protoss"
                value={raceOpponent}
                onClick={handleRaceOpponent}
                src="/images/protoss.png"
                alt="protoss"
                width="auto"
                height="200"
              />
              <input
                className={
                  raceOpponent === 'zerg' || raceOpponent.length === 0
                    ? ''
                    : 'grayscale'
                }
                type="image"
                id="zerg"
                value={raceOpponent}
                onClick={handleRaceOpponent}
                src="/images/zerg.png"
                alt="zerg"
                width="200"
                height="auto"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                disabled={isButtonDisabled}
                className="w-full items-center rounded-lg bg-orange px-4 py-2 text-center text-sm font-medium hover:bg-white hover:text-navy disabled:cursor-not-allowed disabled:opacity-10"
                onClick={handleMatchup}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Home
