import Head from 'next/head'
import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'
import Table from "../components/Table.tsx";
import React, { useState } from 'react';
import { LoremIpsum } from "lorem-ipsum";
import { getRandomInt } from "../utils/Random.js";
// import AddEntry from "../components/NewEntryForm.js";
import axios from 'axios';


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


let defaultData = [
  {
    title: '@fakeuser info interview',
    description: 'dmed founder @fakeuser and asked for an informational interview. link: https://twitter.com/blahblah what happens if the text is super long',
    expiry: 32341234, // timestamp
    created: 12341234, // timestamp
    status: 'open',
    tags: "saas, interview, twitter",
    outcome: "",
  },
  {
    title: 'salary raise',
    description: 'asked boss for a 15% raise',
    expiry: 45674567,
    created: 12345678,
    status: 'rejected',
    tags: "job, career, finances",
    outcome: "gave a 5% raise!",
  },
  {
    title: 'improve table css bounty',
    description: 'Asked on twitter for anyone who wants to contribute to this site if they could improve the CSS of this table. Linked a rough design spec as well with the needed features. Link: https://twitter.com/blahblah',
    expiry: 67896789,
    created: 12346789,
    status: 'accepted',
    tags: "delegated, twitter, saas",
    outcome: "@bojanglesfake followed the spec, made a pr, merged, sent bounty via venmo"
  },
]
let blahData = []
// use axios to fetch blahData from backend
try {
  const res = axios
    .get(
      // 'http://localhost:8000/default_data',
      "https://red-ducks-study-193-56-116-236.loca.lt/default_data",
      { headers: { "Bypass-Tunnel-Reminder": "bingo" } }
      // add 'Access-Control-Allow-Origin' to headers
      // this results in err on backend api: "OPTIONS /default_data HTTP/1.1" 405 Method Not Allowed
      // before it would get a 200 response on the python side
      // { headers: { 'Access-Control-Allow-Origin': '*' } } 
    )
    // if you have ok response from the server
    .then(response => {
      alert(response.data);
      console.log(response);
    })
    // if error
    .catch(function(error) {
      console.log(error);
    });
  blahData = JSON.stringify(res).message
  console.log(blahData)
} catch (err) {
  console.log(err)
}
console.log(blahData)


export default function Home() {

  const [rowData, setRowData] = useState(() => [...defaultData])
  const onAddRowClick = () => {
    setRowData(
      rowData.concat({ 
        title: lorem.generateWords(5), 
        description: lorem.generateSentences(2), 
        expiry: getRandomInt(1000000000), 
        created: getRandomInt(1000000000), 
        status: lorem.generateWords(1), 
        tags: lorem.generateWords(3), 
        outcome: lorem.generateSentences(1),
      })
    )
  }


  return (
    // <div className="">
    <div className="flex flex-col h-screen text-[#1bf091]">
      <Head>
        <title>REJECTR</title>
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

      <a className="p-5 bg-black bg-opacity-80 text-center font-serif font-family:'Times New Roman' underline decoration-pink-400 hover:text-purple-500" href="https://forum.effectivealtruism.org/posts/Pc3CFbYxPXgyjoDpB/seven-ways-to-become-unstoppably-agentic">
        track rejections, explore your opportunity space
      </a>

      <div className="grid justify-items-center">
        <button 
          onClick={onAddRowClick}
          className="w-32 font-serif font-family:'Times New Roman' bg-black bg-opacity-80 text-white font-bold mt-8 py-2 px-4 hover:text-[#1bf091]"
        >
          new entry
        </button>
      </div>

      <main className="mt-2 flex-1 flex flex-col justify-center font-serif font-family:'Times New Roman'">
        <div className="grid justify-items-center bg-black bg-opacity-80">
          <Table data={rowData}/>
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
