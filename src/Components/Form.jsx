import React from "react";

const formFields = [
  { type: "text", placeholder: "Property Type *" },
  { type: "text", placeholder: "Property Sub Type *" },
  { type: "text", placeholder: "Select Building Type *" },
  { type: "text", placeholder: "Location *" },
  { type: "text", placeholder: "Landmark *" },
  { type: "text", placeholder: "Street Name *" },
  { type: "number", placeholder: "Enter Size *" },
  { type: "text", placeholder: "Hostel Name *" },
  { type: "number", placeholder: "Monthly Rent *" },
  { type: "number", placeholder: "Advance/Security Deposit *" },
  { type: "number", placeholder: "Maintenance Fee *" },
  { type: "text", placeholder: "Bedroom(s) *" },
  { type: "text", placeholder: "Bathroom(s) *" },
  { type: "text", placeholder: "Additional Room *" },
  { type: "text", placeholder: "Balconie(s) *" },
  { type: "text", placeholder: "Property on Floor *" },
  { type: "text", placeholder: "Total Floors *" },
  { type: "text", placeholder: "Property Facing *" },
  { type: "text", placeholder: "Furnished Status *" },
  { type: "text", placeholder: "Age of the property *" },
  { type: "text", placeholder: "Servant Accommodation *" },
  { type: "text", placeholder: "Pet Allowed *" },
  { type: "text", placeholder: "Food Preference *" },
  { type: "text", placeholder: "Parking *" },
  { type: "text", placeholder: "Preferred Tenants *" },
  { type: "text", placeholder: "Society Name *" },
  { type: "text", placeholder: "Suitable Time to Call *" },
  { type: "text", placeholder: "Pantry *" },
  { type: "text", placeholder: "Cafeteria *" },
  { type: "text", placeholder: "Washrooms *" },
  { type: "text", placeholder: "Seating capacity *" },
  { type: "text", placeholder: "Road Width *" },
  { type: "text", placeholder: "Car parking space *" },
  { type: "text", placeholder: "No of seats *" },
  { type: "text", placeholder: "2 wheeler parking *" },
  { type: "text", placeholder: "Plot dimension *" },
  { type: "text", placeholder: "Description *", isTextarea: true },
];

const Form = () => {
  return (
    <div className="m-5 flex items-center justify-center  ">
      <div
        className="w-full max-w-5xl bg-white shadow-lg rounded-lg border border-spacing-8 overflow-hidden flex"
        style={{ width: "1100px", height: "550px" }}
      >
        <div className="w-1/3 p-6 bg-gradient-to-b from-red-500 to-pink-600 text-white">
          <h2 className="text-2xl font-bold mb-4">SUBMIT PROPERTY</h2>
          <ul className="space-y-3 py-20">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Post Your Property For FREE
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Get Instant Response
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Showcase Your Property
            </li>
          </ul>
        </div>
        <div className="w-2/3 p-6 overflow-y-auto">
          <form className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index} className="w-full">
                {field.isTextarea ? (
                  <textarea
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded resize-none"
                    rows="4"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600">
                I agree with the <span className="text-red-500">Terms and Conditions</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-2/3 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded"
            >
              SAVE & CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
