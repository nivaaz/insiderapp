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
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import ForCustomers from "../components/for-customers";

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
        <main className="w-full m-0 p-0 mt-4 md:mt-8 font-para">
          <nav className="flex justify-between w-full md:max-w-4xl mx-auto">
            {/* TODO: change to logo */}
            <p className="font-bold text-lg my-auto text-[#1FC8E1] drop-shadow-md ">
              {" "}
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
          </nav>
          <section className="md:max-w-4xl md:mx-auto px-4"> 
          <div className="h-screen flex flex-col justify-center pt-24 md:pt-0">
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
            <div className="border-l-4 pl-2 border-pink-500 mt-16">
              <p className="text-2xl  font-para pt-4">
                Insider is a no-code platform that provides brands with a simple
                way to leverage web3 technologies to acquire and retain their
                customers more effectively.
              </p>
              <p className="text-2xl pt-16 font-para">
                {" "}
                It’s the new and easier way to launch NFT loyalty programs.
              </p>
            </div>
          </div>
          </section>
          <section className="md:max-w-4xl md:mx-auto flex flex-col py-16 bg-white rounded-lg p-8 mt-32 md:mt-0 mb-16 px-4">
            <h2 className="text-4xl font-heading pb-8 font-bold"> How it works </h2>
            <div className="grid md:grid-cols-3">
              <div className="p-2">
                <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md">
                  <p className="text-3xl text-center pb-2  text-white"> 1 </p>{" "}
                </div>
                <span>
                  {" "}
                  <p className="text-xl">
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
                  <p className="text-xl">
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
                  <p className="text-xl">
                    {" "}
                    Receive a customised shopfront where your customers can buy
                    your digital membership passes and see your brand presence
                    grow.{" "}
                  </p>{" "}
                </span>
              </div>
            </div>
          </section>
         
        <div className="bg-pink-600 py-32 grid grid-cols-3">
            <div className="mx-auto">
            <FontAwesomeIcon color="#fff" icon={faBoltLightning} size={"5x"} />
          </div>
          <div className="mx-auto">
            <FontAwesomeIcon color="#fff" icon={faMessage} size={"5x"} />
          </div>
          <div className="mx-auto">
            <FontAwesomeIcon color="#fff" icon={faTicket} size={"5x"} />
          </div>
        </div>
          <section className="md:max-w-4xl md:mx-auto border-b-2 md:pb-32 space-y-16  px-4">
            <div>
              <h2 className="text-4xl font-heading py-10 font-bold">Why choose Insider </h2>
              {/*  */}
              <div className="flex md:flex-row flex-col">
                <div className="flex flex-col md:flex-row pt-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faLightbulb}
                      size={iconSize}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-2xl">
                      {" "}
                      Deep expertise across consumer marketing{" "}
                    </p>
                    <hr className="border-cyan-500" />

                    <div>
                      <p className="pt-4 text-xl">
                        {" "}
                        With deep expertise across consumer marketing, product
                        design and web3, we know that it is more expensive than
                        ever for brands to acquire and retain customers.
                      </p>
                      <p className="pt-4 text-xl">
                        The market is inundated with loyalty programs that are
                        ineffective at retaining customers.
                      </p>
                      <div className="border border-2 border-pink-500 p-4 rounded-md mt-4">
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
                <div className="flex flex-col md:flex-row pt-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faGears}
                      size={iconSize}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-2xl">
                      Easy access with our no code tools and coaching
                    </p>
                    <hr className="border-cyan-500" />

                    <div>
                      <p className="pt-4 text-xl">
                        We know that brands, like yours, are interested in using
                        this technology to stand out from competitors, but are
                        wary of the risks.
                      </p>
                      <div className="border border-2 border-pink-500 p-4 rounded-md mt-4">
                        <p className="pb-4 text-lg">
                          We provide holistic coaching for your teams to
                          onboard, design and effortlessly launch your tokenised
                          brand loyalty programs through our no-code platform.
                        </p>
                      </div>
                      <p className="pt-4 text-xl">
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
          <ForCustomers/>
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
      <div className="flex flex-col justify-center py-32">
        <p className="pb-8 mx-auto text-xl">
          {" "}
          Be the first to know when we launch
        </p>
        <span className="mx-auto flex flex-col space-y-8 align-center md:flex-row">
          <div className="flex flex-col mt-auto">
            {" "}
            <label>My email is</label>{" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg p-4 text-black"
              placeholder="ada@lovelace.com"
              type="email"
              id="email"
              size="25"
              required
            />
          </div>
          <div className="flex flex-col mt-0">
            <label> And I am </label>
            <select
              name="customerType"
              id="customerType"
              className="bg-white border rounded-md mx-4 py-4"
              onChange={(e) => {
                setCustomerType(e.target.value);
              }}
            >
              <option value="shopper">Shopper</option>
              <option value="investor">Investor </option>
              <option value="business owner">Business Owner</option>
            </select>
          </div>
          <p className="text-red font-bold"> {error}</p>
          <button
            className="border p-4 ml-4 rounded-xl bg-black text-white"
            onClick={handleClick}
          >
            Join the waiting list{" "}
          </button>
        </span>
      </div>
    );
  }
};

export default Home;
