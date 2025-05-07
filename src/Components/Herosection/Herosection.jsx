import React from "react";
import bgImage from "../../assets/banner-img-1.png";
import CountUp from "react-countup";
import Cards from "../Cards/Cards";

const Herosection = () => {
  return (
    <div>
      <section
        className="max-w-screen-xl mx-auto h-[550px] bg-cover bg-center  xl:rounded-2xl mb-26"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="font-extrabold xl:text-4xl text-2xl pt-28  text-center text-white max-w-screen-md mx-auto px-5 ">
          It avoids subjective claims or exaggeration that might raise red flags
          legally
        </h1>
        <h1 className="font-medium text-base pt-44  text-center text-white max-w-screen-md mx-auto px-5 ">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </h1>
      </section>

      <section className="max-w-screen-xl mx-auto">
        <h1 className="font-extrabold text-3xl text-center mb-4">
          Our Best Lawyers
        </h1>
        <p className="text-base font-regular xl:px-36 px-6 text-center mb-8">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </section>
      <Cards></Cards>
      <section className="max-w-screen-xl mx-auto ">
        <h1 className="font-extrabold xl:text-4xl text-2xl  text-center mb-4 ">
          We Provide best Law Services
        </h1>
        <p className="font-regular text-base text-gray-400 text-center mb-6">
          Out platform connects you with verified experienced Lawyers across
          various specilities - all at your convenience
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          <div className="bg-gray-200 xl:p-6  p-4 rounded-2xl space-y-5">
            <img src="https://i.imgur.com/HUAO0gG.png" alt=""  className="mx-auto"/>
            <p className="font-bold text-4xl text-center">
              <CountUp
                start={100}
                end={200}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={200}
                useEasing={true}
              />
              +
            </p>

            <h1 className="font-bold text-xl text-center">Total Lawyers</h1>
          </div>
          <div className="bg-gray-200 xl:p-6  p-4 rounded-2xl space-y-5">
            <img src="https://i.imgur.com/A3RPZKe.png" alt="" className="mx-auto"/>
            <p className="font-bold text-4xl text-center">
              <CountUp
                start={380}
                end={454}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={200}
                useEasing={true}
              />
              +
            </p>
            <h1 className="font-bold text-xl text-center">Total Review</h1>
          </div>
          <div className="bg-gray-200 xl:p-6  p-4 rounded-2xl space-y-5">
            <img src="https://i.imgur.com/38zvPjU.png" alt="" className="mx-auto" />
            <p className="font-bold text-4xl text-center">
              <CountUp
                start={1550}
                end={1612}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={200}
                useEasing={true}
              />
              +
            </p>
            <h1 className="font-bold text-xl text-center">Total Cases Initiated</h1>
          </div>
          <div className="bg-gray-200 xl:p-6  p-4 rounded-2xl space-y-5 text-center">
            <img src="https://i.imgur.com/HlPe0R1.png" alt=""  className="mx-auto"/>
            <p className="font-bold text-4xl">
              <CountUp
                start={200}
                end={292}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={200}
                useEasing={true}
              />
              +
            </p>
            <h1 className="font-bold text-xl text-center">Total Stuffs</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
