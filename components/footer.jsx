import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("founders@insiderapp.xyz");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 5000);
  };
  
  return (
    <section className="text-center bg-white mx-auto p-2 md:p-16 rounded-lg flex flex-col justify-center py-32 space-y-2 text-black">
      <h2 className="pb-8 text-xl"> Get in touch</h2>

      <p
        className="hover:underline  my-auto hover:text-purple-500 py-4 cursor-pointer"
        onClick={copyEmail}
      >
        founders@insiderapp.xyz{" "}
        {!copiedEmail ? (
          <FontAwesomeIcon icon={faCopy} size="lg" className="md:pl-4" />
        ) : (
          <div className="flex">
            {" "}
            <p className="bg-purple-200 text-center m-auto rounded-md p-4  my-auto">
              copied email{" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="pl-2"
              />
            </p>
          </div>
        )}{" "}
      </p>
      <a
        className="hover:underline hover:text-purple-500 py-4  my-auto"
        target="_blank"
        rel="noreferrer"
        href="https://calendly.com/foundersinsider"
      >
        {" "}
        calendly.com/foundersinsider{" "}
      </a>
    </section>
  );
};
