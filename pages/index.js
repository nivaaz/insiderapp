import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { features } from "../constants/insider-features"

export default function Home() {
  const feat = features.map((item) => (
    <a key={item.copy} className={styles.card}>
      <Image src={item.image}/> 
      <p> {item.copy} </p>
    </a>
  ));

  const [email, setEmail] = useState();
  return (
    <div className={styles.container}>
      <Head>
        <title>Insider</title>
        <meta
          name="description"
          content="Insider | Build trust and community with NFTs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="flex justify-between w-full">
          <p> Insider</p>
          <button className="border px-4 py-2 rounded-xl" onClick={()=>{window.scrollTo({
            top: 1000,
            behavior: 'smooth'
          })}}>
            Join the waitlist{" "}
          </button>
        </nav>
        <div className="h-screen flex flex-col justify-center">
          <h1 className={styles.title}>Build trust and community with NFTs.</h1>

          <p className={styles.description}>
            Insider is a brand membership platform powered by NFTs.
          </p>
          <p className="text-center">
            We enable deeper trust and incentives for brands and their
            customers.
          </p>
          <p className="text-center">With Insider, brands and customers build value together.</p>
        </div>

        <div className="rounded-xl">
          <h2 className="text-center text-lg"> With Insider </h2>
          <div className={styles.grid}>{feat}</div>
        </div>
      </main>

      <div className="flex flex-col justify-center align-center pb-8" id="email">
        <p className="py-4 mx-auto"> Be the first to know when we launch</p>
        <span className="mx-auto">   
          <input onChange={(e)=>(setEmail)} className="bg-white rounded-lg p-4 text-black" placeholder="ada@lovelace.com" type="email" id="email" size="30" required/> 
          <button className="border p-4 ml-4 rounded-xl"> Join the waiting list </button>
        </span>
      
      </div>

      <footer className={styles.footer}>Built with 💖 by Ashi & Nivaaz</footer>
    </div>
  );
}
