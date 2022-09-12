import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faGift, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForCustomers = () => {
  return (
    <>
      <section className="py-16">
        <div className="m-4 md:max-w-4xl mx-auto rounded-lg bg-white md:px-4 px-2">
          <h2 className="text-4xl font-heading py-8 font-bold">
            But, what about customers?
          </h2>
          <p className="text-lg">
            Digital passes can be redeemed from a customer&apos;s favourite
            brands.
          </p>
          <p className="text-lg py-4">
            For customers, Insider digital passes represent ownership of your
            loyalty programs with your favourite brands.
          </p>
          <h3 className="text-2xl font-bold py-8 font-heading ">
            How does it work for customers?
          </h3>
          <div className="grid md:grid-cols-3">
            <div className="flex flex-col px-4 border border-cyan-500 md:border-0 rounded-md my-4 pt-4">
              <div className="md:ml-0">
                {" "}
                <FontAwesomeIcon
                  color="#06b6d4"
                  icon={faCreditCard}
                  size={"3x"}
                />{" "}
              </div>
              <p className="text-lg py-4">
                Buy Insider digital passes to get insider access to your
                favourite brands.{" "}
              </p>
            </div>
            <div className="flex flex-col px-4 border border-cyan-500 md:border-0 rounded-md my-4 pt-4">
              <div className="md:ml-0">
                {" "}
                <FontAwesomeIcon
                  color="#06b6d4"
                  icon={faGift}
                  size={"3x"}
                />{" "}
              </div>
              <p className="text-lg py-4">
                Earn rewards and acess exclusive experiences via digital passes
                you own. <br /> Watch your digital passes appreciate in value,
                the more you engage with your favourite brands.{" "}
              </p>
            </div>
            <div className="flex flex-col px-4 border border-cyan-500 md:border-0 rounded-md my-4 pt-4">
              <div className="md:ml-0">
                {" "}
                <FontAwesomeIcon
                  color="#06b6d4"
                  icon={faShoppingCart}
                  size={"3x"}
                />{" "}
              </div>
              <p className="text-lg py-4">
                Sell your digital passes and rewards to other customers at any
                point, to earn a return on your investment.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForCustomers;
