import Image from "next/image";
import Link from "next/link";
import graph from "../assets/graph.svg"
import star from "../assets/star.svg"
import user from "../assets/user.svg"

const WhyInsider = () => {
  return (
    <>
      <section className="md:py-32 space-y-16 px-4">
        <div className="md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl font-heading py-10 font-bold text-white">
            Designed for brands
          </h2>
          {/*  */}
          <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-2  text-white">
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={user}/> </div>
              <h3 className="font-medium text-xl py-4"> New Customers </h3>
              <p>
                {" "}
                Leveraging cutting edge technology means you will appeal to
                emerging spenders like Millenials and GenZ.{" "}
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={graph}/> </div>
              <h3 className="font-medium text-xl py-4"> Grow Revenue </h3>
              <p>
                {" "}
                Customers are rewarded the longer they hold the pass and how involved they are with your brand. If they decide to sell the digital pass, you can earn secondary royalties on each pass that is resold.
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={star}/> </div>
              <h3 className="font-medium text-xl py-4"> Retain customers </h3>
              <p>
                {" "}
                Digital passes let you clearly find superfans and reward them for their engagement - which is all built into the platform!
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="flex py-16 px-2 bg-white">
        <div className="flex flex-col md:flex-row justify-center mx-auto">
          <p className="my-auto p-4 text-xl text-black"> Want to learn more? </p>
          <Link href="https://calendly.com/nivaaz">  
           <p  className="p-4 text-black font-bold bg-primary-light hover:primary-default rounded-lg cursor-pointer">  Book a free consultation</p></Link> 
           
         
        </div>
      </div>
    </>
  );
};

export default WhyInsider;
