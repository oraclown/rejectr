import Head from 'next/head'
import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'


export default function Home() {
  return (
    // <div className="">
    <div className="flex flex-col h-screen text-[#1bf091]">
      <Head>
        <title>TELLOR DATA</title>
        <meta name="description" content="generated by u bro" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <div className={bgWrap}>
        <Image
          src="/images/psych_bkgrd_reduced.png"
          layout="fill"
          objectFit="cover"
          />
      </div>

      <h1 className="p-5 text-5xl font-bold text-center font-serif font-family:'Times New Roman'">
        REJECTR
      </h1>

      <p className="p-5 bg-black text-center font-serif font-family:'Times New Roman'">
        track rejections, explore your opportunity space
      </p>

      <main className="flex-1 flex flex-col justify-center font-serif font-family:'Times New Roman'">
        <div className="text-center p-5">
          <p>
            paginated list of open asks, rejections, or accepteds.
            <br/>
            sort by tag(s), expiry, date created, text search, keyword search, etc.
          </p>
        </div>
      </main>

      <footer className='text-center p-5 font-serif font-family:"Times New Roman"'>
        <p>
        by oraclown | < a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.twitter.com/oraclown">twitter</a>
        &nbsp;| < a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.github.com/oraclown">github</a>
        </p>
      </footer>
    </div>
  )
}
