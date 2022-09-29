import { useState } from "react";

const GetStarted = () => {
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const updatedState = { ...formValues };
    updatedState[name] = value;
    setFormValues(updatedState);
    console.log(value)
  };
  const formy = [
    Array(formValues.length).map((item) => {
      return formValues[item];
    }),
  ];
  return (
    <div className="w-full flex flex-col space-y-8 mb-16">
      <section className="max-w-xl mx-auto min-h-screen flex">
        <div className="my-auto text-white text-center"> 
        <h1 className="text-2xl py-8 font-heading">
          Get Started with Insider
        </h1>
        <p > scroll down  </p>
        </div>
      </section>
      {/*  */}
      <section className="max-w-xl mx-auto font-para">
        <h2 className="text-xl py-8"> Tell us a little bit about your brand</h2>
        <label>
          My brand is called
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="text"
          />
        </label>
        <label>
          One line to describe what my brand does is
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="text"
          />
        </label>
        <label>
          Our website link is
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="url"
          />
        </label>
      </section>

      {/*
       */}
      <section className="max-w-xl mx-auto font-para ">
        <h2 className="text-xl py-8">
          {" "}
          Describe the NFT collection you want to create
        </h2>
        <label>
          My motivation for creating an NFT collection is
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="text"
          />
        </label>
        <label>
          My collection will be called (we can change this later)
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="text"
          />
        </label>
        <label>
          My collection will have
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:bg-indigo-900"
            type="url"
          />
        </label>
        {formy.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </section>
    </div>
  );
};
export default GetStarted;
