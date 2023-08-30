import { useEffect, useState } from "react";
import { getNumberOfSignUps } from "../components/firebase";
import { useFirebase } from "../components/firebaseProvider";

const Stats = () => {
  const {app} = useFirebase;
  const [numberOfSignUps, setNumberOfSignUps] = useState("100+");

  useEffect(() => {
    const fetchSignUps = async () => {
      const numSignup = await getNumberOfSignUps(app);
      setNumberOfSignUps(numSignup);
    };
    fetchSignUps();
  }, [app]);

  return (
    <div className="grid m-auto text-center space-y-8 mt-8 min-h-screen">
      <h1 className="font-heading font-bold text-5xl">
        {" "}
        Here are some Insider stats{" "}
      </h1>
      <div className="space-y-4">
        <p className="font-para text-5xl">
          {" "}
          <b className="font-bold"> {numberOfSignUps}</b> email sign ups
        </p>
        <p> From investors, marketers, business owners and shoppers.</p>
      </div>
    </div>
  );
};

export default Stats;
