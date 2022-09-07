import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import { features } from "../constants/insider-features";
import { FirebaseContext } from "../components/firebaseProvider";
import { addEmailToWaitlist, app } from "../components/firebase";

const Home = () => {
  const feat = features.map((item) => (
    <a key={item.copy} className={styles.card}>
      <Image src={item.image} />
      <p> {item.copy} </p>
    </a>
  ));

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
      <FirebaseContext.Provider value={app}>
        <main className={styles.main}>
          <nav className="flex justify-between w-full">
            <p> Insider</p>
            <button
              className="border px-4 py-2 rounded-xl"
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
            >
              Join the waitlist{" "}
            </button>
          </nav>
          <div className="h-screen flex flex-col justify-center">
            <h1 className={styles.title}>
              Build trust and community with NFTs.
            </h1>

            <p className={styles.description}>
              Insider is a brand membership platform powered by NFTs.
            </p>
            <p className="text-center">
              We enable deeper trust and incentives for brands and their
              customers.
            </p>
            <p className="text-center">
              With Insider, brands and customers build value together.
            </p>
          </div>

          <div className="rounded-xl">
            <h2 className="text-center text-lg"> With Insider </h2>
            <div className={styles.grid}>{feat}</div>
          </div>
        </main>
        <FirebaseContext.Consumer>
          {() => (
            <>
              <div
                className="flex flex-col justify-center align-center pb-8"
                id="email"
              >
                <EmailCapture />
              </div>
            </>
          )}
        </FirebaseContext.Consumer>
      </FirebaseContext.Provider>
    </div>
  );
};

const EmailCapture = () => {
  const [email, setEmail] = useState();
  const [customerType, setCustomerType] = useState();
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { app } = useContext(FirebaseContext);

  const handleClick = () => {
    if (email && customerType) {
      addEmailToWaitlist(app, email, customerType);
      setIsSubmitted(true);
      setError();
    } else {
      setError("Please answer all questions before submitting.");
    }
  };
  if (isSubmitted) {
    return <> Got it, thanks!</>;
  } else {
    return (
      <>
        <p className="py-4 mx-auto"> Be the first to know when we launch</p>
        <span className="mx-auto">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-lg p-4 text-black"
            placeholder="ada@lovelace.com"
            type="email"
            id="email"
            size="30"
            required
          />
          <select
            name="customerType"
            id="customerType"
            onChange={(e) => {
              setCustomerType(e.target.value);
            }}
          >
            <option value="shopper">Shopper</option>
            <option value="investor">Investor </option>
            <option value="business owner">Business Owner</option>
          </select>
          <p className="text-red font-bold"> {error}</p>
          <button className="border p-4 ml-4 rounded-xl" onClick={handleClick}>
            Join the waiting list{" "}
          </button>
        </span>
      </>
    );
  }
};

export default Home;
