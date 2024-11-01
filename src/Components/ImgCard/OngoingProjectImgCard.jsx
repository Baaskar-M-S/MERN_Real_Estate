import { Link } from "react-router-dom";

const OngoingProjectImgCard = () => {
  return (
    <div className=" shadow-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <image
          src="https://www.chennaiproperties.in/projectsgallery/6214/salepageimages/SM_Sri_Sheshadri_Nagar_1.jpg"
          alt="Project Image"
          className="w-[400px] h-[250px] object-center"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-lg">
          Featured
        </span>
      </div>

      <div className="p-5 flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold text-blue-700">
          PREMIER SRI AISHWARYAM NAGAR
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          <span className="font-semibold">Location :</span> Near By Kirubasanam
          Church Of Christ, Guduvanchery, Chennai.
        </p>

        <Link className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ">
          GET THIS DEAL
        </Link>

        <div className="text-center mt-4">
          <p className="text-red-500 font-semibold">Plots</p>
          <p className="text-gray-500">
            <span className="font-bold">Beds:</span> Not Applicable
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Area:</span> 1200 - 3000 Sqft
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Price:</span> 23.94 L - 59.85 L *
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Rate Per Sqft:</span> 1,995
          </p>
        </div>

        <Link className="mt-6 bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ">
          Contact Builder
        </Link>
      </div>
    </div>
  );
};

export default OngoingProjectImgCard;