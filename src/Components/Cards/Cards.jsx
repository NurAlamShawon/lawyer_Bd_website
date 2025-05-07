import React, { useContext, useState } from "react";
import { lawyerdataContext } from "../LandingPage/LandingPage";
import { Link } from "react-router";

const Cards = () => {
  const lawyers = useContext(lawyerdataContext);

  const [showAll, setShowAll] = useState(false);

  const displayedLawyers = showAll ? lawyers : lawyers.slice(0, 6);

  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
        {displayedLawyers.map((lawyer) => {
          return (
           
            <div className="flex p-6 border border-gray-400 rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-md">
            <div className="mr-15">
              <img
                src={lawyer.image}
                alt=""
                className="w-40 h-40 rounded-xl object-cover"
              />
            </div>
          
            <div className="space-y-2">
              <div>
                <button className="btn btn-soft btn-info rounded-2xl">
                  {lawyer.availabilityStatus}
                </button>
                <button className="btn btn-soft btn-success rounded-2xl ml-2">
                  {lawyer.experience} Years Experience
                </button>
              </div>
          
              <h1 className="text-xl font-extrabold">{lawyer.name}</h1>
              <p className="font-medium text-base">{lawyer.speciality}</p>
              <p className="font-medium text-base">
                License No: {lawyer.licenseNumber}
              </p>
          
              <Link to={`/lawyer-description/${lawyer.id}`}>
                <button className="btn btn-outline btn-info rounded-2xl w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
          
          );
        })}
      </div>

      <div class="flex justify-center items-center">
        <button
          className="btn btn-success rounded-2xl text-white"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Show Less Lawyer" : "Show All Lawyer"}
        </button>
      </div>
   
    </div>
  );
};

export default Cards;
