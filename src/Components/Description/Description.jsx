import React, { useContext, useState } from "react";
import { lawyerdataContext } from "../LandingPage/LandingPage";
import { useParams } from "react-router";
import { setlawyers } from "../../Utilities/Utilities";
import { ToastContainer, toast } from "react-toastify";

const Description = () => {
  const lawyers = useContext(lawyerdataContext);

  const params = useParams();
  const id = parseInt(params.id);

  const lawyer = lawyers.find((lawyer) => lawyer.id == id);

  const isAvailable = lawyer.availabilityStatus === "Available";

  const [checklawyercount, setchecklawyercount] = useState([]);

  const addlawyer = (lawyerid) => {
    const validcount = checklawyercount.find((count) => count == lawyerid);

    if (!validcount) {
      toast("You have booked a appointment!");
      const newcheck = [...checklawyercount, lawyerid];
      setchecklawyercount(newcheck);
    }

    setlawyers(lawyerid);
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      {/* intro */}
      <div className="rounded-2xl bg-gray-300 h-64 xl:p-18 p-6 mb-10">
        <h1 className="font-extrabold text-2xl text-center mb-8">
          Lawyer’s Profile Details
        </h1>
        <p className="xl:px-30 px-2 font-medium text-base text-center">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      {/* details card */}
      <div className="flex items-center mb-10 border-2 border-gray-300 p-8 rounded-2xl">
        <div className="mr-8">
          <img src={lawyer.image} alt="" className="w-72 h-72 rounded-xl" />
        </div>
        <div className="xl:space-y-5 space-y-2">
          <div>
            <button className="btn btn-soft btn-success rounded-2xl">
              {lawyer.experience} Years Experience
            </button>
          </div>

          <h1 className="font-extrabold text-2xl">{lawyer.name}</h1>
          <div className="xl:flex">
            <p className="font-medium text-base mr-10 text-[#777777]">
              {lawyer.speciality}
            </p>
            <p className="font-medium xl:text-base text-sm text-[#7D7D7D]">
              License No: {lawyer.licenseNumber}
            </p>
          </div>
          <p className="xl:flex items-center ">
            <span className="mr-3 text-[#7D7D7D] font-bold">Availability</span>
            <div className="xl:flex">
              {lawyer.availability.map((date) => {
                return (
                  <button className="btn btn-soft btn-warning mr-3 rounded-2xl">
                    {date}
                  </button>
                );
              })}
            </div>
          </p>
          <p className="font-bold text-base text-[#7D7D7D]">
            Consultation Fee:{" "}
            <span className="text-[#0EA106] ">Taka : {lawyer.fee}</span>
          </p>
        </div>
      </div>

      {/* book appointment card */}

      <div className="space-y-8 border-2 border-gray-300 p-8 rounded-2xl mb-20">
        <h1 className="font-bold text-2xl text-center">Book an Appointment</h1>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">Availability</p>
          <button className="font-medium text-lg btn btn-soft btn-success text-[#09982F] rounded-2xl">
            Lawyer {lawyer.availabilityStatus} Today
          </button>
        </div>
        <div className="border-dashed border-1 border-gray-300"></div>
        <button
          className="btn btn-soft btn-warning text-[#FFA000] rounded-2xl xl:p-5 p-10 xl:text-base text-xs"
          disabled="disabled"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xl:size-6 size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </button>
        <button
          className={`btn-success btn rounded-2xl text-white text-center xl:mx-3 w-full `}
          disabled={!isAvailable}
          onClick={() => {
            addlawyer(lawyer.id);
          }}
        >
          {isAvailable ? "Book Appointment Now" : "Can't Book Appointment Now"}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Description;
