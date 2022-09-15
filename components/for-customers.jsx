import Image from "next/image"
import build from "../assets/build.svg"
import chat from "../assets/chat.svg"
import crown from "../assets/crown.svg"

const ForCustomers = () => {
  return (
    <>
     
      <section className="md:py-32 space-y-16 px-4">
        <div className="md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl font-heading py-10 font-bold text-black">
            We keep the customers in mind
          </h2>
          <div className="grid grid-cols-3 text-white">
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b to-[#1B030EE5] from-black rounded-lg border p-8">
              <div> <Image alt="" src={build}/> </div>
              <h3 className="font-medium text-xl py-4"> Built with the brand </h3>
              <p>
                {" "}
                Customers get to be apart of the process of your next launches
                and give feedback on previous ones.
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b to-[#1B030EE5] from-black rounded-lg border p-8">
              <div> <Image alt="" src={crown}/> </div>
              <h3 className="font-medium text-xl py-4"> Earn while engaging </h3>
              <p>
                {" "}
                Customers earn rewards on their digital passes through
                engagement, unlock more incentives, and can resell their passes
                at any point.
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-gradient-to-b to-[#1B030EE5] from-black rounded-lg border p-8">
              <div> <Image alt="" src={chat}/> </div>
              <h3 className="font-medium text-xl py-4"> Community </h3>
              <p>
                {" "}
                Customers can connect with like-minded superfans of your brand
                in your exclusive community wherre they can share advice and
                learn.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ForCustomers;
