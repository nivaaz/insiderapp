import Image from "next/image";
import designPass from "../assets/customise-pass.svg"
import designProgram from "../assets/design-your-program.png"
import launchCollection from "../assets/minting-page.png"

const HowItWorks = (props) => {
  return (
    <section className="md:max-w-5xl md:mx-auto flex flex-col py-16 p-8 px-4">

      <div className="m-auto my-24"> 
      <p className="mx-auto text-white pb-4 text-center"> Launch a collection in 3 steps </p>
      <h2 className="text-4xl md:text-6xl font-heading pb-8 font-medium mx-auto">
        strategise. design. <b className="font-bold italic"> launch. </b>
      </h2>
      </div>
      <div className="p-4 md:p-8 rounded-lg bg-white bg-opacity-10 my-2 grid grid-cols-2 shadow-lg">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md">
              <p className="max-w-md pr text-3xl text-center pb-2 text-white">
                1
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4"> Strategise </h3>
          </div>

          <span>
            <p className="max-w-md pr text-lg">
              The Insider team works with your brand to onboard the team onto
              our platform and co-create a personalised brand membership
              strategy.
            </p>
          </span>
        </div>
        <div >
          <Image  alt="design digital pass" src={designPass}/>
        </div>
      </div>

      <div className="p-4 md:p-8 rounded-lg bg-white bg-opacity-10 my-2 grid grid-cols-2 shadow-lg ">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md">
              <p className="max-w-md pr text-3xl text-center pb-2 text-white">
                {" "}
                2{" "}
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4"> Design </h3>
          </div>

          <span>
            <p className="max-w-md pr text-lg">
              Design your digital passes using our questionnaire tool in
              minutes.
            </p>
          </span>
        </div>

        <div >
          <Image  alt="design your NFT collection" src={designProgram}/>
        </div>
      </div>

      <div className="p-4 md:p-8 rounded-lg bg-white bg-opacity-10 my-2 grid grid-cols-2 shadow-lg">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md ">
              <p className="max-w-md pr text-3xl text-center pb-2 text-white">
                3
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4"> Launch </h3>
          </div>
          <span>
            <p className="max-w-md pr text-lg pb-4">
              Insider provides you with a platform for customers to purchase
              your digital passes. Simply share the link.
            </p>
            <button onClick={props.scrollToEmailInput} className="p-4 bg-[#DFCAE9] rounded-lg text-black">
              Join the waitlist
            </button>
          </span>
        </div>

        <div >
          <Image  alt="Collection shop page" src={launchCollection}/>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

