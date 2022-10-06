import Image from "next/image";
import { useState, useRef } from "react";
import Button from "../components/design-system/button";

const GetStarted = () => {
  const [formValues, setFormValues] = useState({});
  const [preview, setPreview] = useState(false);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const updatedState = { ...formValues };
    if (name === "passImage") {
      console.log(e.target.files);
      const url = URL.createObjectURL(e.target.files[0]); // this might need to be value.
      updatedState[name] = url;
      setFormValues(updatedState);
    } else {
      updatedState[name] = value;
      setFormValues(updatedState);
    }
  };
  // scroll to form
  const myRef = useRef(null);
  const scrollToEmailInput = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full flex flex-col space-y-8 p-4 pb-16 bg-purple-100 text-black">
      <section className=" border border-black w-full mx-auto min-h-screen flex">
      
        <div className="m-auto text-center">
          <h1 className="text-2xl py-8 font-heading">
            Launch Loyalty Passes with Insider
            {/* TODO: replace this with the logo */}
          </h1>
          <p>1. Tell us about your brand</p>
          <p>2. Tell us about your loyalty pass collection</p>
          <p>3. Design your loyalty pass collection</p>
          <p>4. Preview & share your collection</p>
          <div className="flex justify-center pt-8"> 
          <Button copy="Let's go" variant="primary"
            onClick={scrollToEmailInput}
            />
            </div>
        </div>
      </section>
      <div className="grid md:grid-cols-2 relative">
        <div className="m-auto space-y-8">
          <Section ref={myRef}>
            <p className="text-5xl text-black">1</p>
            <h2 className="text-xl py-8">
              {" "}
              Tell us a little bit about your brand
            </h2>
            <label>
              My brand is called
              <input
                placeholder="cool cookies"
                name="brandName"
                onChange={handleInputChange}
                className= "border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              One line to describe what my brand does is
              <textarea
                placeholder="We ship cold cookies right to your doorstep."
                name="brandDescription"
                onChange={handleInputChange}
                className="block w-full border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              Our website link is
              <input
                name="website"
                placeholder="coolcookies.xyz"
                onChange={handleInputChange}
                className= "border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="url"
              />
            </label>
          </Section>
          <Section>
            <p className="text-5xl text-black">2</p>

            <h2 className="text-xl py-8">
              Describe the NFT collection you want to create
            </h2>
            <label className="pt-4">
              My motivation for creating an NFT collection is
              <textarea
                placeholder="to have a loyalty program that rewards 'our Coolers (shoppers) and connect them so they can share recpeies with eachother."
                name="motivation"
                onChange={handleInputChange}
                className="block w-full border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              My collection will be called (we can change this later)
              <input
                name="collectionName"
                onChange={handleInputChange}
                placeholder="Cooler Cookies Collection"
                className="w-full border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              My collection will have
              <input
                name="numberOfNfts"
                placeholder="200"
                onChange={handleInputChange}
                className= "border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="url"
              />
              loyalty passes
            </label>
          </Section>
          <Section>
            <p className="text-5xl text-black">3</p>

            <h2 className="text-xl py-8">Design your pass</h2>
            <label className="pt-4">
              Upload an image for your pass
              <input
                onChange={handleInputChange}
                className=" border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="file"
                name="passImage"
                accept="image/*"
              />
            </label>
            <label className="py-4">
              Add the price of your pass
              <input
                placeholder="$100USD"
                name="passPrice"
                onChange={handleInputChange}
                className=" border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="py-4">
              Percentage of royalties to be paid back to the brand from resales
              <input
                placeholder="$100USD"
                name="passRoyalty"
                onChange={handleInputChange}
                className=" border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <p>
              Each pass can have up to 3 unique trait categories. Each triat
              category have 1 out of 3 trait values.
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
                className="border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              Add a trait value
              <input
                placeholder="leo"
                name="trait1Value1"
                onChange={handleInputChange}
                className="border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="pt-4">
              Add a trait value
              <input
                placeholder="cancer"
                name="trait1Value2"
                onChange={handleInputChange}
                className="border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            <label className="py-4">
              Add a trait value
              <input
                placeholder="capricorn"
                name="trait1Value3"
                onChange={handleInputChange}
                className="border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
            {/* // TODO: automate adding new traits and trait values  */}
          </Section>
          {/* TODO: describe the persk that come with this loaylty pass  */}
          <Section>
            <p className="text-5xl text-black">4</p>
            <h2 className="text-xl py-8">Tell us about the pass perks</h2>
            <label className="py-4">
              What perks can customers expect to get by purchasing the pass?
              <textarea
                placeholder="-Access to cookie making classes"
                name="passPerks"
                onChange={handleInputChange}
                className="block w-full border-b border-primary-default m-1 bg-transparent hover:border-black"
                type="text"
              />
            </label>
          </Section>{" "}
        </div>
        <div className="h-full">
            <div className="md:sticky top-0 h-screen flex">
              <div className="m-auto"> 
              <p className="text-5xl text-black py-4">Preview</p>
              <div className="m-auto border border-black rounded-xl p-4 space-y-4"> 
              <h3 className="text-black italic text-xl"> {formValues?.collectionName ?? 'Collection Name'}</h3>
              <p> by {formValues.brandName ?? 'Brand'} </p>

              <p className="font-bold">
                Our motivation for this collection is:
              </p>
              <p> {formValues.motivation ?? ' Share the cookie love with the world'} </p>
              <p>
                This collection has {formValues.numberOfNfts} passes. Each pass
                will have one of the following unique traits:
                {formValues.trait1Category?? ' cookie flavour'}
              </p>
              <Image
                width={200}
                height={200}
                alt="pass image"
                src={formValues.passImage}
              />
            </div>
            </div></div>
        </div>
      </div>
      {/*  */}

      <div className="max-w-xl mx-auto">
        <Button
          copy="Preview collection"
          variant="primary"
          onClick={() => {
            setPreview(true);
          }}
        />
      </div>
    </div>
  );
};
export default GetStarted;

const Section = (props) => (
  <div className="h-screen flex" ref={props.ref}> 
  <section className="m-auto border border-black p-4 pb-12 w-full max-w-xl mx-auto font-para grid">
    <>{props.children}</>
  </section>
  </div>
);
