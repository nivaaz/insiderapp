import Head from "next/head";
import { useContext, useState } from "react";
import { FirebaseContext } from "../components/firebaseProvider";
import { addEmailToWaitlist, app } from "../components/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faBoltLightning,
  faGears,
  faRocket,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import ForCustomers from "../components/for-customers";
import logo from "../assets/logo.svg";
import Image from "next/image";

const Home = () => {
  const iconSize = "4x";
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
      </Head>
      <FirebaseContext.Provider value={app}>
        <main className="w-full -mt-4 p-0 font-para">
          <nav className=" w-full pt-8 bg-white">
            <div className="md:max-w-4xl mx-auto flex justify-between">
              {/* TODO: change to logo */}
              {/* <div className="w-fit flex justify-start "> 
             <Image src={logo} height="20px" className="mr-auto ml-0"/>
             </div> */}
              <p className="font-bold text-lg my-auto text-[#1FC8E1] drop-shadow-md ">
                Insider{" "}
              </p>
              <button
                className="border p-4 ml-4 rounded-xl bg-black text-white"
                onClick={() => {
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                }}
              >
                Join the waitlist
              </button>
            </div>
          </nav>
          <section className="px-4 bg-white">
            <div className="md:max-w-4xl md:mx-auto h-screen flex flex-col justify-center pt-24 md:pt-0 ">
              <h1 className="text-4xl font-heading  md:text-8xl font-heading font-bold">
                Turn customers into investors and supercharge loyalty
                <FontAwesomeIcon
                  color="#1FC8E1"
                  icon={faBolt}
                  size="2xs"
                  className="pl-4"
                  bounce
                />
              </h1>
            </div>
          </section>

          <section className="bg-gray-900 text-white">
            <div className="py-16  md:max-w-4xl md:mx-auto"> 
              <p className="text-2xl font-para pt-4">
                Insider is a no-code platform that provides brands with a simple
                way to leverage web3 technologies to acquire and retain their
                customers more effectively.
              </p>
              <p className="text-2xl pt-16 font-para">
                {" "}
                It’s the new and easier way to launch NFT loyalty programs.
              </p>
            </div>
          </section>

          <section className="md:max-w-4xl md:mx-auto flex flex-col py-16 bg-white rounded-lg p-8 mt-32 mb-16 px-4">
            <h2 className="text-4xl font-heading pb-8 font-bold">
              {" "}
              How it works{" "}
            </h2>
            <div className="grid md:grid-cols-3">
              <div className="p-2">
                <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md">
                  <p className="text-3xl text-center pb-2  text-white"> 1 </p>{" "}
                </div>
                <span>
                  {" "}
                  <p className="text-lg">
                    {" "}
                    Onboard your team onto Insider and receive a personalised
                    strategy session.
                  </p>{" "}
                </span>
              </div>
              <div className="p-2 md:pt-10">
                <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md">
                  <p className="text-3xl text-center pb-2  text-white"> 2 </p>{" "}
                </div>
                <span>
                  {" "}
                  <p className="text-lg">
                    Fill out a simple questionnaire to design your new NFT
                    loyalty program
                  </p>{" "}
                </span>
              </div>
              <div className="p-2 md:pt-20">
                <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md ">
                  <p className="text-3xl text-center pb-2  text-white"> 3 </p>{" "}
                </div>
                <span>
                  {" "}
                  <p className="text-lg">
                    {" "}
                    Receive a customised shopfront where your customers can buy
                    your digital membership passes and see your brand presence
                    grow.{" "}
                  </p>{" "}
                </span>
              </div>
            </div>
          </section>

          <section className="md:py-32 space-y-16 bg-white px-4">
            <div className="md:max-w-4xl md:mx-auto">
              <h2 className="text-4xl font-heading py-10 font-bold">
                Why choose Insider{" "}
              </h2>
              {/*  */}
              <div className="flex md:flex-row flex-col">
                <div className="flex flex-col md:pr-4 pt-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faLightbulb}
                      size={iconSize}
                    />
                  </div>
                  <p className="text-2xl font-medium mt-4">
                    Deep expertise across consumer marketing
                  </p>
                  <div className="p-4 border border-gray-800 rounded-md mt-4">
                    <div>
                      <p className="pt-4 text-lg">
                        With deep expertise across consumer marketing, product
                        design and web3, we know that it is more expensive than
                        ever for brands to acquire and retain customers.
                      </p>
                      <p className="pt-4 text-lg">
                        The market is inundated with loyalty programs that are
                        ineffective at retaining customers.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md mt-4">
                        <p className="pb-4 text-lg">
                          By launching NFT-enabled loyalty programs through
                          Insider, you can:
                        </p>
                        <ul className="text-lg">
                          <li>
                            - Generate new customers and appeal to emerging
                            spenders (Millennials and Gen Z)
                          </li>
                          <li>
                            - Generate additional revenue and secondary
                            royalties
                          </li>
                          <li>- Identify and activate superfan communities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col pt-4 md:pl-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faGears}
                      size={iconSize}
                    />
                  </div>
                  <p className="text-2xl py-4 font-medium">
                    Easy access with our no code tools and coaching
                  </p>
                  <div className="p-4 border border-gray-800 rounded-md flex h-full">
                    <div>
                      <p className="pt-4 text-lg">
                        We know that brands, like yours, are interested in using
                        this technology to stand out from competitors, but are
                        wary of the risks.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md mt-4">
                        <p className="pb-4 text-lg">
                          We provide holistic coaching for your teams to
                          onboard, design and effortlessly launch your tokenised
                          brand loyalty programs through our no-code platform.
                        </p>
                      </div>
                      <p className="pt-4 text-lg">
                        {" "}
                        We also factor in requirements around compliance, IP and
                        branding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ForCustomers />
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
        </main>
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
    return (
      <div className="w-full text-center">
        <p> We have your email, thank you!</p>
      </div>
    );
  } else {
    return (
      <section className="bg-gray-900 text-white"> 
      <div className="md:max-w-4xl mx-auto p-2 md:p-16 rounded-lg flex flex-col justify-center py-32 ">
        <p className="pb-8 mx-auto text-5xl">
          Be the first to know when we launch{" "}
          <FontAwesomeIcon
            color="#ec4899"
            icon={faRocket}
            size="2xs"
            className="pl-4 -mb-2"
            bounce
          />
        </p>
        <span className="mx-auto flex flex-col space-y-8 align-center md:flex-row">
          <div className="flex flex-col mt-auto">
            <label>
              My email is
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-lg p-4 text-black"
                placeholder="ada@lovelace.com"
                type="email"
                id="email"
                size="25"
                required
              />
            </label>{" "}
          </div>
          <div className="flex flex-col mt-0">
            <label>
              {" "}
              And I am
              <select
                name="customerType"
                id="customerType"
                className="bg-white text-black border rounded-md py-4"
                onChange={(e) => {
                  setCustomerType(e.target.value);
                }}
              >
                <option className="text-black" value="shopper">
                  Shopper
                </option>
                <option className="text-black" value="investor">
                  Investor{" "}
                </option>
                <option className="text-black" value="business owner">
                  Business Owner
                </option>
              </select>
            </label>
          </div>
          <p className="text-red font-bold"> {error}</p>
          <button
            className="border p-4 ml-4 rounded-xl bg-pink-600 text-white"
            onClick={handleClick}
          >
            Join the waiting list{" "}
          </button>
        </span>
      </div>
      </section>
    );
  }
};

export default Home;
