import Image from "next/image"
import build from "../assets/build.svg"
import chat from "../assets/chat.svg"
import crown from "../assets/crown.svg"

const ForCustomers = () => {
  return (
    <>
      <section className="py-8 md:py-32 space-y-16 px-4">
        <div className="md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl font-heading py-10 text-black font-bold">
            We keep the customers in mind
          </h2>
          <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-2  text-white">
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={build}/> </div>
              <h3 className="font-medium text-xl py-4"> Build with brands </h3>
              <p>
                Customers can be a part of your product development process and are incentivised to provide feedback.
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={crown}/> </div>
              <h3 className="font-medium text-xl py-4"> Earn while engaging </h3>
              <p>
                Customers earn rewards on their digital passes through
                engagement, unlock more incentives, and can resell their passes
                at any point.
              </p>{" "}
            </div>
            {/*  */}
            <div className="flex flex-col bg-black bg-opacity-60 rounded-lg border p-8 hover:border-primary-light">
              <div> <Image alt="" src={chat}/> </div>
              <h3 className="font-medium text-xl py-4"> Community </h3>
              <p>
                Customers can connect on topics dedicated to sharing advice, reviews and creating content. Create cult communities around your brand, at scale.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ForCustomers;
