import Head from "next/head";
import { FirebaseContext } from "../components/firebaseProvider";
import { app } from "../components/firebase";
import ForCustomers from "../components/for-customers";
import HowItWorks from "../components/how-it-works";
import WhyInsider from "../components/why-insider";
import passes from "../assets/header-passes.svg";
import Image from "next/image";
import JoinTheWaitList from "../components/join-the-waitlist";
import mintingSite from "../assets/minting-page.png";
import perksProgram from "../assets/perks-program.png";
import logo from "../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import BIRDS from 'vanta/dist/vanta.birds.min'

const Home = () => {
  const myRef = useRef(null);
  const scrollToEmailInput = () => myRef.current.scrollIntoView();
  // const [vantaEffect, setVantaEffect] = useState(0);
  const heroRef = useRef(null)

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(BIRDS({
  //       el: myRef.current,
  //       // mouseControls: true,
  //       // touchControls: true,
  //       // gyroControls: false,
  //       // minHeight: 200.00,
  //       // minWidth: 200.00,
  //       // scale: 1.00,
  //       // scaleMobile: 1.00
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  return (
    <div>
      <Head>
        <title>Insider</title>
        <meta
          name="description"
          content="Insider | Turn customers into investors and supercharge loyalty."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
        <link src="three.r119.min.js"/>
      </Head>
      <FirebaseContext.Provider value={app}>
        <main className="w-full p-0 font-para">
          <nav className="w-full backdrop-blur-sm sticky top-0 z-50">
            <div className="md:max-w-5xl mx-auto flex justify-between">
              <div className="w-24 py-0 my-0">
                <Image src={logo} />
              </div>
              <button
                className="px-4 ml-4 rounded-xl bg-[#DFCAE9] text-black"
                onClick={scrollToEmailInput}
              >
                Join the waitlist
              </button>
            </div>
          </nav>
          <section className="px-4" ref = {heroRef} id="your-element-selector">
            <div className="md:max-w-5xl md:mx-auto flex h-screen flex pt-24 md:pt-0 text-white">
              <div className="grid md:grid-cols-2 my-auto">
                <div className="m-auto">
                  <h1 className="text-3xl md:text-5xl font-heading font-heading font-bold">
                    Maximise customer lifetime value and financially reward your
                    most loyal customers
                  </h1>
                  <button
                    className="p-4 bg-[#DFCAE9] rounded-lg text-black my-4"
                    onClick={scrollToEmailInput}
                  >
                    {" "}
                    Join the waitlist{" "}
                  </button>
                </div>
                <div className="py-8">
                  <Image alt="digital passes" src={passes} />
                </div>
              </div>
            </div>
          </section>

          <section className="text-black">
            <div className="m-auto bg-[#DFCAE9] py-16 md:px-8 px-2 md:max-w-5xl md:mx-auto grid md:grid-cols-2 rounded-lg align-center">
              <div className="my-auto">
                <p className="text-2xl md:text-4xl font-para pt-4">
                  Insider is the new and easy way to launch NFT loyalty programs
                  and maximise customer lifetime value.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  alt="join our loyalty program minting website"
                  src={mintingSite}
                />
              </div>
            </div>
          </section>

          <HowItWorks scrollToEmailInput={scrollToEmailInput} />
          {/* <section className="my-8">
            <div className="flex flex-col">
              <h1 className="m-auto"> See Insider in action</h1>
              <video controls className="m-auto">
                <source src="https://www.loom.com/share/20530fa54b6a4bd09100472854f57bd2" />
              </video>
            </div>
          </section> */}
          <WhyInsider />
          <ForCustomers />
          <FirebaseContext.Consumer>
            {() => (
              <>
                <div
                  className="flex flex-col justify-center align-center pb-8"
                  id="email"
                >
                  <JoinTheWaitList refProp={myRef} />
                </div>
              </>
            )}
          </FirebaseContext.Consumer>
        </main>
      </FirebaseContext.Provider>
    </div>
  );
};

export default Home;
