import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import { FirebaseContext } from "./firebaseProvider";
import { addEmailToWaitlist} from "../components/firebase";
import clsx from 'clsx';

const JoinTheWaitList = (props) => {
  const [email, setEmail] = useState();
  const [customerType, setCustomerType] = useState("Shopper");
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { app } = useContext(FirebaseContext);
  const textInput = useRef(null);

  const handleClick = () => {
    setEmail(textInput.current?.value);
    if ((email || textInput.current?.value) && customerType) {
      try {
        addEmailToWaitlist(app, email, customerType);
      } catch (e) {
        setError("Something went wrong, try again later");
      }
      setIsSubmitted(true);
      setError();
    } else {
      setError("Please answer all questions before submitting.");
    }
  };
  if (isSubmitted) {
    return (
      <div className="w-full text-center text-black text-xl">
        <p> We have your email, thank you!</p>
      </div>
    );
  } else {
    return (
      <>
        {props.showTitle && (
          <p className="pb-8 mx-auto text-xl md:text-4xl">
            Be the first of to know when we launch
            <FontAwesomeIcon
              color="#712396"
              icon={faRocket}
              size="2xs"
              className="md:pl-4 -mb-2"
              bounce
            />
          </p>
        )}
        <p className="text-center text-pink-500 font-bold"> {error}</p>
        <span
          // ref={props.refProp} className={clsx("mx-auto flex flex-col md:flex-row space-y-8 align-center  justify-center", "grid grid-flow-row" && props.grid)}>
          ref={props.refProp} className={clsx(props.grid? 'flex-row' : 'flex flex-col md:flex-row', 'mx-auto space-y-8 align-center justify-center')}>
          <div className="flex flex-col mt-auto">
            <label className="grid px-1">
              My email is {props.grid ?? 'false'}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-lg border border-violet-500 text-black p-4"
                placeholder="ada@lovelace.com"
                type="email"
                id="email"
                size="25"
                required
                ref={textInput}
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
                className="bg-white text-black border border-violet-500 rounded-lg p-4"
                onChange={(e) => {
                  setCustomerType(e.target.value);
                }}
              >
                <option className="text-black py-4" value="shopper">
                  a shopper
                </option>
                <option className="text-black py-4" value="investor">
                  an investor{" "}
                </option>
                <option className="text-black py-4" value="business owner">
                  a business owner
                </option>
                <option className="text-black py-4 my-4" value="marketer">
                  a marketer/innovator
                </option>
              </select>
            </label>
          </div>
          <div className="flex">
            <button
              className={clsx("mt-auto mb-0 p-4 rounded-xl text-primary-light bg-violet-700 font-bold hover:bg-violet-900", props.grid ? 'ml-1' : 'md:ml-4' )}
              onClick={handleClick}
            >
              Join the waiting list{" "}
            </button>
          </div>
        </span>
      </>
    );
  }
};

export default JoinTheWaitList;
