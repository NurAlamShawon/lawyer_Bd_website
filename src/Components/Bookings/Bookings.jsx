import React, { useContext, useEffect, useState } from "react";

import { getlawyers, removelawyer } from "../../Utilities/Utilities";
import { lawyerdataContext } from "../LandingPage/LandingPage";

const Bookings = () => {
  const [lawyer, setlawyer] = useState([]);

  const lawyers = useContext(lawyerdataContext);

  useEffect(() => {
    const law = getlawyers();

    const lawyeritem = law.map((read) => parseInt(read));

    const items = lawyers.filter((book) =>
      lawyeritem.includes(parseInt(book.id))
    );

    setlawyer(items);
  }, [lawyers]);

  const deletelawyer = (id) => {
    removelawyer(id);

    const law = getlawyers();
    const lawyeritem = law.map((read) => parseInt(read));
    const updated = lawyers.filter((book) =>
      lawyeritem.includes(parseInt(book.id))
    );

    setlawyer(updated);
  };

  console.log(lawyer);
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <h1 className="font-extrabold text-3xl text-center mb-6">
        My Today Appointments
      </h1>
      <p className="font-regular text-base text-center mb-14">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>

      {lawyer.map((law) => {
        return (
          <div
            className="mb-10 border-2 border-gray-300 p-8 rounded-2xl"
            key={law.id}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-bold text-xl">{law.name}</h1>
                <p className="font-medium text-base mr-10 text-[#777777]">
                  {law.speciality}
                </p>
              </div>

              <div>
                <p className="font-bold text-base text-[#7D7D7D] ">
                  Appointment Fee: Taka : {law.fee}
                </p>
              </div>
            </div>
            <div className="border-dashed border-1 border-gray-300 mb-10"></div>
            <button
              className="btn btn-outline btn-error w-full text-center rounded-2xl"
              onClick={() => {
                deletelawyer(law.id);
              }}
            >
              Cancel Appointment
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Bookings;
