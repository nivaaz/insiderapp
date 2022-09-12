import { faGears, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhyInsider = ()=>{
    const iconSize = "4x";
    return (
        <section className="md:py-32 space-y-16 bg-white px-4">
            <div className="md:max-w-4xl md:mx-auto">
              <h2 className="text-4xl font-heading py-10 font-bold">
                Why choose Insider{" "}
              </h2>
              {/*  */}
              <div className="flex md:flex-row flex-col">
                <div className="flex flex-col md:pr-4 pt-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faLightbulb}
                      size={iconSize}
                    />
                  </div>
                  <p className="text-2xl font-medium mt-4">
                    Deep expertise across consumer marketing
                  </p>
                  <div className="p-4 border border-gray-800 rounded-md mt-4">
                    <div>
                      <p className="pt-4 text-lg">
                        With deep expertise across consumer marketing, product
                        design and web3, we know that it is more expensive than
                        ever for brands to acquire and retain customers.
                      </p>
                      <p className="pt-4 text-lg">
                        The market is inundated with loyalty programs that are
                        ineffective at retaining customers.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md mt-4">
                        <p className="pb-4 text-lg">
                          By launching NFT-enabled loyalty programs through
                          Insider, you can:
                        </p>
                        <ul className="text-lg">
                          <li>
                            - Generate new customers and appeal to emerging
                            spenders (Millennials and Gen Z)
                          </li>
                          <li>
                            - Generate additional revenue and secondary
                            royalties
                          </li>
                          <li>- Identify and activate superfan communities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col pt-4 md:pl-4 w-full">
                  <div className="w-1/5">
                    <FontAwesomeIcon
                      color="#06b6d4"
                      icon={faGears}
                      size={iconSize}
                    />
                  </div>
                  <p className="text-2xl py-4 font-medium">
                    Easy access with our no code tools and coaching
                  </p>
                  <div className="p-4 border border-gray-800 rounded-md flex h-full">
                    <div>
                      <p className="pt-4 text-lg">
                        We know that brands, like yours, are interested in using
                        this technology to stand out from competitors, but are
                        wary of the risks.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded-md mt-4">
                        <p className="pb-4 text-lg">
                          We provide holistic coaching for your teams to
                          onboard, design and effortlessly launch your tokenised
                          brand loyalty programs through our no-code platform.
                        </p>
                      </div>
                      <p className="pt-4 text-lg">
                        {" "}
                        We also factor in requirements around compliance, IP and
                        branding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default WhyInsider