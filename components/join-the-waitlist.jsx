import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { FirebaseContext } from "./firebaseProvider";
import { addEmailToWaitlist } from "../components/firebase";

const JoinTheWaitList = (props) => {
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
      <section className="bg-white text-black">
        <div className="md:max-w-5xl mx-auto p-2 md:p-16 rounded-lg flex flex-col justify-center py-32 space-x-2 space-y-2">
          <p className="pb-8 mx-auto text-xl md:text-4xl">
            Be the first to know when we launch{" "}
            <FontAwesomeIcon
              color="#CACDE9"
              icon={faRocket}
              size="2xs"
              className="md:pl-4 -mb-2"
              bounce
            />
          </p>
          <span ref={props.refProp} className="mx-auto flex flex-col space-y-8  align-center md:flex-row justify-center">
            <div className="flex flex-col mt-auto">
              <label className="grid px-1">
                My email is
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-lg p-4 text-black px-1"
                  placeholder="ada@lovelace.com"
                  type="email"
                  id="email"
                  size="25"
                  required
                />
              </label>{" "}
            </div>
            <div className="flex flex-col mt-0">
              <label className="grid px-1">
                {" "}
                And I am
                <select
                  name="customerType"
                  id="customerType"
                  className="bg-white text-black border rounded-md py-4 px-1"
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
              className="p-4 md:ml-4 rounded-xl bg-primary text-black font-bold"
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

export default JoinTheWaitList;
