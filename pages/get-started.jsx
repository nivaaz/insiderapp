import Image from "next/image";
import { useState, useRef } from "react";
import Button from "../components/design-system/button";

const GetStarted = () => {
  const [formValues, setFormValues] = useState({});
  const [preview, setPreview] = useState(false);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const updatedState = { ...formValues };
    if (name === "passImage"){
      console.log(e.target.files)
      const url = URL.createObjectURL(e.target.files[0]); // this might need to be value.
      updatedState[name] = url;
      setFormValues(updatedState);
    }  else {
      updatedState[name] = value;
      setFormValues(updatedState);
    }
  };
  // scroll to form
  const myRef = useRef(null);
  const scrollToEmailInput = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full flex flex-col space-y-8 p-4 pb-16">
      <section className=" border border-teal-200 w-full mx-auto min-h-screen flex">
        <div className="m-auto text-white text-center">
          <h1 className="text-2xl py-8 font-heading">
            Get Started with Insider
            {/* TODO: replace this with the logo */}
          </h1>
          <p
            className="cursor-pointer py-4 px-8 bg-teal-300 text-black font-bold"
            onClick={scrollToEmailInput}
          >
          
            Let&apos;s go{" "}
          </p>
        </div>
      </section>
      {/*  */}
      <section
        ref={myRef}
        className=" border border-teal-200 p-4 pb-12 w-full max-w-xl mx-auto font-para grid"
      >
        <p className="text-5xl text-teal-200">1</p>
        <h2 className="text-xl py-8"> Tell us a little bit about your brand</h2>
        <label>
          My brand is called
          <input
            placeholder="cool cookies"
            name="brandName"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          One line to describe what my brand does is
          <textarea
            placeholder="We ship cold cookies right to your doorstep."
            name="brandDescription"
            onChange={handleInputChange}
            className="block w-full text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          Our website link is
          <input
            name="website"
            placeholder="coolcookies.xyz"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="url"
          />
        </label>
      </section>

      <Section>
      <p className="text-5xl text-teal-200">2</p>

        <h2 className="text-xl py-8">
        
          Describe the NFT collection you want to create
        </h2>
        <label className="pt-4">
          My motivation for creating an NFT collection is
          <textarea
            placeholder="to have a loyalty program that rewards 'our Coolers (shoppers) and connect them so they can share recpeies with eachother."
            name="motivation"
            onChange={handleInputChange}
            className="block w-full text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          My collection will be called (we can change this later)
          <input
            name="collectionName"
            onChange={handleInputChange}
            placeholder="Cooler Cookies Collection"
            className="w-full text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          My collection will have
          <input
            name="numberOfNfts"
            placeholder="200"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="url"
          />
          loyalty passes
        </label>
      </Section>

      <Section>
      <p className="text-5xl text-teal-200">3</p>
       
        <h2 className="text-xl py-8">Design your pass</h2>
        <label className="pt-4">
          Upload an image for your pass
          <input
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="file"
            name = "passImage"
            accept="image/*"
          />
        </label>
        <label className="py-4">
          Add the price of your pass
          <input
            placeholder="$100USD"
            name="passPrice"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="py-4">
          Percentage of royalties to be paid back to the brand from resales
          <input
            placeholder="$100USD"
            name="passRoyalty"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <p>
        
          Each pass can have up to 3 unique trait categories. Each triat
          category have 1 out of 3 trait values.{" "}
        </p>
        <p>
        
          For example, a trait category might be star sign, and the 3 triats
          values could be Capricorn, Aquarius and Leo.
        </p>
        <label className="pt-4">
          What is the first trait category called?
          <input
            placeholder="star sign"
            name="trait1Category"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          Add a trait value
          <input
            placeholder="leo"
            name="trait1Value1"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="pt-4">
          Add a trait value
          <input
            placeholder="cancer"
            name="trait1Value2"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        <label className="py-4">
          Add a trait value
          <input
            placeholder="capricorn"
            name="trait1Value3"
            onChange={handleInputChange}
            className="text-white border-b border-primary-default m-1 bg-transparent hover:border-teal-900"
            type="text"
          />
        </label>
        {/* // TODO: automate adding new traits and trait values  */}
        <Button
          copy="Preview collection"
          variant="primary"
          onClick={() => {
            setPreview(true);
          }}
        />
      </Section>

      {preview && (
        <Section>
          <div> 
          <h3> {formValues?.collectionName}</h3>
          <p> by {formValues.brandName} </p>
          
          <p className="font-bold text-xl"> {formValues.collectionName}</p>
          <p className="font-bold"> Our motivation for this collection is: </p>
           <p> {formValues.motivation}</p>
           <p> This collection has {formValues.numberOfNfts} passes. Each pass will have one of the following unique traits: {formValues.trait1Category}</p>
            <Image width={200} height={200} alt="pass image" src={formValues.passImage}/>
          </div>
          <div> 
            {/* <Image src = {}/> */}
          </div>
        </Section>
      )}
    </div>
  );
};
export default GetStarted;

// might need to be props children
const Section = (props) => (
  <section className=" border border-teal-200 p-4 pb-12 w-full max-w-xl mx-auto font-para grid">
    <>{props.children}</>
  </section>
);
