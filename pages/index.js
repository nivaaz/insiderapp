import logo from "../assets/logoimage.svg";
import log1o from "../assets/small-bg.svg";
import Head from "next/head";
import { FirebaseContext } from "../components/firebaseProvider";
import ForCustomers from "../components/for-customers";
import HowItWorks from "../components/how-it-works";
import WhyInsider from "../components/why-insider";
import passes from "../assets/header-passes.svg";
import Image from "next/image";
import JoinTheWaitList from "../components/join-the-waitlist";
import mintingSite from "../assets/minting-page.png";
import { useEffect, useRef, useState } from "react";
import { oembed } from "@loomhq/loom-embed";

const getHtml = async () => {
  const res = await oembed(
    "https://www.loom.com/share/20530fa54b6a4bd09100472854f57bd2"
  );
  return res.html;
};

const MyComponent = (props) => {
  return <div dangerouslySetInnerHTML={props.loomvideo} />;
};

const Home = () => {
  const myRef = useRef(null);
  const scrollToEmailInput = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  const [loomvideo, setloomvideo] = useState();

  useEffect(() => {
    const res = getHtml();
    res.then((r) => {
      setloomvideo({ __html: r });
    });
  }, []);

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
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full p-0 font-para bg-primary-dark bg-[url('../assets/Vector2.svg')] bg-cover">
        <nav className="w-full  backdrop-blur-lg sticky top-0 z-50">
          <div className="md:max-w-5xl mx-auto flex justify-between">
            <div className="w-28 py-0 my-0 px-2 pt-2">
              <Image alt="Insider Logo" src={logo} />
            </div>
            <button
              className="px-4 ml-4 rounded-xl text-primary-light hover:bg-violet-900 bg-black font-bold h-min py-2 my-auto mr-2 cursor-pointer"
              onClick={scrollToEmailInput}
            >
              Join the waitlist
            </button>
          </div>
        </nav>
        <section id="your-element-selector" className="px-4">
          <div className="md:max-w-5xl md:mx-auto flex pt-24 md:pt-0 text-black min-h-screen">
            <div className="grid md:grid-cols-2 my-auto">
              <div className="m-auto">
                <h1 className="text-3xl md:text-6xl font-heading font-bold">
                  Maximise customer lifetime value and financially reward your
                  most loyal customers
                </h1>
                
                <FirebaseContext.Consumer>
                  {() => (
                    <div className="mt-16"> 
                    <p className="font-para font-semibold text-lg ml-1 mb-4"> Be the first to know when we launch!</p>
                    <JoinTheWaitList myRef={myRef} grid/>
                    </div>
                  )}
                </FirebaseContext.Consumer>
              </div>
              <div className="py-16 md:py-0">
                <Image
                  alt="digital passes"
                  src={passes}
                  onClick={scrollToEmailInput}
                />
              </div>
            </div>
          </div>
        </section>
        <section></section>
        <section className="text-black">
          <div className="m-auto shadow-xl bg-white bg-opacity-90 py-16 md:px-8 px-2 md:max-w-5xl md:mx-auto grid md:grid-cols-2 rounded-lg align-center">
            <div className="my-auto">
              <p className="text-2xl md:text-4xl text-black font-para font-semibold pt-4">
                Insider offers powerful no-code tools to easily design and
                launch digital membership passes for your brand.{" "}
              </p>
              <p className=" text-xl md:text-2xl text-black font-param pt-4">
                {" "}
                These unlock monetary incentives for customers and strengthens
                their loyalty.
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
        <div className="">
          <HowItWorks scrollToEmailInput={scrollToEmailInput} />{" "}
        </div>
        <section className="my-8 py-16 bg-primary-default bg-opacity-50">
          <div className="flex flex-col justify-center align-center mx-auto max-w-5xl">
            <h1 className="font-medium text-center text-black text-5xl pb-8">
              {" "}
              See Insider in action
            </h1>
            <MyComponent loomvideo={loomvideo} />{" "}
          </div>
        </section>

        <WhyInsider />
        <ForCustomers />
        <div
          id="email"
          className="md:max-w-5xl mx-auto p-2 md:p-16 rounded-lg flex flex-col justify-center py-32 space-x-2 space-y-2 text-black"
        >
          <FirebaseContext.Consumer>
            {() => <JoinTheWaitList myRef={myRef} showTitle />}
          </FirebaseContext.Consumer>
        </div>
      </main>
    </div>
  );
};

export default Home;
