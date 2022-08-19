import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    // <div className="">
    <div className="flex flex-col h-screen text-slate-800">
      <Head>
        <title>INSPO</title>
        <meta name="description" content="generated by u bro" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <h1 className="p-5 text-lg text-center border border-slate-800 font-serif bg-red-200 font-family:'Times New Roman'">
        property inspiration
      </h1>

      <main className="flex-1 flex flex-col justify-center border border-slate-800 font-serif bg-pink-200 font-family:'Times New Roman'">
        <div className="text-center p-5">
          <p>nine random fetched pics go here</p>
        </div>
        
        
        <button className="text-center p-1 mt-5 ml-5 mr-2.5 border border-slate-800 hover:bg-gradient-to-r from-teal-300 to-amber-300">click for next pics</button>
        <button className="text-center p-1 mt-5 ml-2.5 mr-5 border border-slate-800 hover:bg-gradient-to-r from-blue-300 to-pink-500">upload image</button>
        
      </main>

      <footer className='text-center p-5 border border-slate-800 bg-emerald-200 font-serif font-family:"Times New Roman"'>
        <p>
        by owen | < a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.twitter.com/oraclown">twitter</a>
        &nbsp;| < a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.github.com/oraclown">github</a>
        </p>
      </footer>
    </div>
  )
}