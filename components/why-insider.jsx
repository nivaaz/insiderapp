import Image from "next/image";
import graph from "../assets/graph.svg"
import star from "../assets/star.svg"
import user from "../assets/user.svg"

const WhyInsider = () => {
  const iconSize = "4x";
  return (
    <>
      <section className="md:py-32 space-y-16 px-4">
        <div className="md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl font-heading py-10 font-bold text-black">
            Designed for brands
          </h2>
          {/*  */}
          <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-2  text-white">
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b from-slate-800 to-black rounded-lg border p-8">
              <div> <Image alt="" src={user}/> </div>
              <h3 className="font-medium text-xl py-4"> New Customers </h3>
              <p>
                {" "}
                Leveraging cutting edge technology means you will appeal to
                emerging spenders like Millenials and GenZ.{" "}
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b from-slate-800 to-black rounded-lg border p-8">
              <div> <Image alt="" src={graph}/> </div>
              <h3 className="font-medium text-xl py-4"> Grow Revenue </h3>
              <p>
                {" "}
                Customers are rewarded the longer the hold the pass but if they
                decide to sell, you can earn an additional sources of revenue
                when customers purchase your digital passes.{" "}
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b from-slate-800 to-black rounded-lg border p-8">
              <div> <Image alt="" src={star}/> </div>
              <h3 className="font-medium text-xl py-4"> Retain customers </h3>
              <p>
                {" "}
                Digital passes let you clearly find superfans and rewards them
                for their engagement - which is all built into the platform!
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="flex py-16 md:py-0 px-2">
        <div className="flex flex-col md:flex-row text-black justify-center mx-auto">
          <p className="my-auto p-4"> Want to learn more? </p>
          <button className="p-4 text-white font-bold bg-[#005EFF] rounded-lg">
            {" "}
            Book a free consultation{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default WhyInsider;