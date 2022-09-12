const GetStarted = () => {
  return (
    <div className="w-full flex flex-col">
    <section className="max-w-xl mx-auto">
        <h1 className="text-2xl py-8 font-heading"> Get Started with Insider</h1>
      </section>
     {/*  */}
      <section  className="max-w-xl mx-auto font-para">
        <h2 className="text-xl py-8"> Tell us a little bit about your brand</h2>
        <label>
          My brand is called
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="text" />
        </label>
        <label>
          One line to describe what my brand does is
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="text" />
        </label>
        <label>
          Our website link is
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="url" />
        </label>
      </section>

      {/* 
       */}
      <section className="max-w-xl mx-auto font-para">
        <h2 className="text-xl py-8"> Describe the NFT collection you want to create</h2>
        <label>
          My motivation for creating an NFT collection is
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="text" />
        </label>
        <label>
         My collection will be called (we can change this later)
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="text" />
        </label>
        <label>
          My collection will have 
          <input className="mx-1 p-4 bg-white border border-slate-200 rounded-full" type="url" />
        </label>
      </section>
    </div>
  );
};
export default GetStarted;
