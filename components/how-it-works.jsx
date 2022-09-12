const HowItWorks = ()=>{
    return (
        <section className="md:max-w-4xl md:mx-auto flex flex-col py-16 bg-white rounded-lg p-8 mt-32 mb-16 px-4">
        <h2 className="text-4xl font-heading pb-8 font-bold">
          {" "}
          How it works{" "}
        </h2>
        <div className="grid md:grid-cols-3">
          <div className="p-2">
            <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md">
              <p className="text-3xl text-center pb-2  text-white"> 1 </p>{" "}
            </div>
            <span>
              {" "}
              <p className="text-lg">
                {" "}
                Onboard your team onto Insider and receive a personalised
                strategy session.
              </p>{" "}
            </span>
          </div>
          <div className="p-2 md:pt-10">
            <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md">
              <p className="text-3xl text-center pb-2  text-white"> 2 </p>{" "}
            </div>
            <span>
              {" "}
              <p className="text-lg">
                Fill out a simple questionnaire to design your new NFT
                loyalty program
              </p>{" "}
            </span>
          </div>
          <div className="p-2 md:pt-20">
            <div className="p-4 rounded-full bg-cyan-500 w-16 h-16 mb-4 shadow-md ">
              <p className="text-3xl text-center pb-2  text-white"> 3 </p>{" "}
            </div>
            <span>
              {" "}
              <p className="text-lg">
                {" "}
                Receive a customised shopfront where your customers can buy
                your digital membership passes and see your brand presence
                grow.{" "}
              </p>{" "}
            </span>
          </div>
        </div>
      </section>

    )
}

export default HowItWorks