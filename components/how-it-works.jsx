import Image from "next/image";
import designPass from "../assets/customise-pass.svg"
import designProgram from "../assets/design-your-program.png"
import launchCollection from "../assets/minting-page.png"

const HowItWorks = (props) => {
  return (
    <section className="md:max-w-5xl md:mx-auto flex flex-col py-16 p-8 px-4">

      <div className="m-auto my-24"> 
      <p className="mx-auto text-primary pb-4 text-center"> Launch a program in 3 steps </p>
      <div className="flex flex-col md:flex-row"> 
      <h2 className="text-4xl md:text-7xl font-heading  md:px-2 pb-8 font-medium mx-auto">
        strategise.
      </h2>
      <h2 className="text-4xl md:text-7xl font-heading  md:px-2 pb-8 font-medium mx-auto">
         design.
      </h2>
      <h2 className="text-4xl italic md:text-7xl font-heading  md:px-2 pb-8 font-medium mx-auto">
         launch.
      </h2>
      </div>
      </div>
      <div className="p-4 md:p-8 rounded-lg bg-primary bg-opacity-70 text-black my-2 grid md:grid-cols-2 shadow-lg">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md">
              <p className="max-w-md text-3xl text-center pb-2 text-primary font-bold">
                1
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4 font-semibold"> Strategise </h3>
          </div>

          <span>
            <p className="max-w-md text-lg">
              The Insider team works with your brand to onboard the team onto
              our platform and co-create a personalised brand membership
              strategy.
            </p>
          </span>
        </div>
        <div className="w-2/3 m-auto pt-4">
          <Image  alt="design digital pass" src={designPass}/>
        </div>
      </div>

      <div className="p-4 md:p-8 rounded-lg bg-primary bg-opacity-70 text-black my-2 grid md:grid-cols-2 shadow-lg ">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md">
              <p className="max-w-md text-3xl text-center pb-2 text-primary font-bold">
                {" "}
                2{" "}
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4 font-semibold"> Design </h3>
          </div>

          <span>
            <p className="max-w-md text-lg">
              Design your digital passes using our questionnaire tool in
              minutes.
            </p>
          </span>
        </div>

        <div className="w-3/5 m-auto pt-4">
          <Image  alt="design your NFT collection" src={designProgram}/>
        </div>
      </div>

      <div className="p-4 md:p-8 rounded-lg bg-primary bg-opacity-70 text-black my-2 grid md:grid-cols-2 shadow-lg">
        <div>
          <div className="flex">
            <div className="p-4 rounded-full bg-black w-16 h-16 mb-4 shadow-md ">
              <p className="max-w-md text-3xl text-center pb-2 text-primary font-bold">
                3
              </p>
            </div>
            <h3 className="my-auto text-2xl pb-3 pl-4 font-semibold"> Launch </h3>
          </div>
          <span>
            <p className="max-w-md text-lg pb-4">
              Insider provides you with a platform for customers to purchase
              your digital passes. Simply share the link.
            </p>
            <button onClick={props.scrollToEmailInput} className="p-4 bg-black rounded-lg text-primary font-bold">
              Join the waitlist
            </button>
          </span>
        </div>

        <div className="w-2/3 m-auto pt-4">
          <Image  alt="Collection shop page" src={launchCollection}/>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

