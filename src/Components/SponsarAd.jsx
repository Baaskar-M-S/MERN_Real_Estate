import React from "react";

const PricingTable = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const amount = 100; 
    
    const options = {
      key: "your_razorpay_key_id", 
      amount: amount * 100, 
      currency: "INR",
      name: "ChennaiRealEstate",
      description: "For testing purposes",
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Baaskar",
        email: "baaskar12308@gmail.com",
        contact: "8608883195",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  const plans = [
    {
      title: "Our Service",
      price: "Details",
      details: [
        "Duration",
        "Response Rate",
        "30 Days Top Slot  in location search ",
        "Premium Tag",
        "Facebook Post",
        "Rate",
      ],
      buttonText: "(_*-*_) ",
      bgColor: "bg-amber-500",
    },

    {
      title: "Basic",
      price: "INR 1,999",
      details: [
        "30 days",
        "Up to 2 times more",
        "No",
        "No",
        "Yes",
        "INR 1,999 + GST",
      ],
      buttonText: "PROCEED",
      bgColor: "bg-blue-900",
      Link: "/",
    },
    {
      title: "Silver",
      price: "INR 2,999",
      details: [
        "60 days",
        "Up to 4 times more",
        "Yes",
        "Yes",
        "No",
        "INR 2,999 + GST",
      ],
      buttonText: "PROCEED",
      bgColor: "bg-teal-500",
    },
    {
      title: "Gold",
      price: "INR 3,999",
      details: [
        "90 days",
        "Up to 6 times more",
        "Yes",
        "Yes",
        "Yes",
        "INR 3,999 + GST",
      ],
      buttonText: "PROCEED",
      bgColor: "bg-blue-900",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Buy Our Service
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full lg:w-1/4 flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg mt-4"
          >
            <div
              className={`${plan.bgColor} text-white text-center p-4 rounded-t-lg`}
            >
              <h2 className="text-2xl font-semibold">{plan.title}</h2>
              <p className="text-2xl font-semibold">{plan.price}</p>
            </div>

            <div className="p-4">
              {plan.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className={`flex justify-center py-2 ${
                    detailIndex < plan.details.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
