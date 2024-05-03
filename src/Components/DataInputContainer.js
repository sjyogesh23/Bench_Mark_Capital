import React, { useState } from "react";

function DataInputContainer() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isMobileValid = /^[0-9]*$/.test(mobile);
  const isSubmitDisabled = !name || !isMobileValid || !isEmailValid || !message;
  const isCancelDisabled = !(name || mobile || email || message);

  const handleCancel = () => {
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log("Submitted!");
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Customer Data
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name*"
            className="w-full bg-gray-700 rounded-md py-2 px-3 text-white"
          />
        </div>

        <div className="col-span-2">
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[0-9]*"
            placeholder="Enter your mobile number*"
            className="w-full bg-gray-700 rounded-md py-2 px-3 text-white"
          />
        </div>

        <div className="col-span-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email*"
            className="w-full bg-gray-700 rounded-md py-2 px-3 text-white"
          />
        </div>

        <div className="col-span-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Enter your message*"
            className="w-full bg-gray-700 rounded-md py-2 px-3 text-white"
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          className={`border-1 rounded-md py-2 ${
            isCancelDisabled
              ? "border-gray-400 text-gray-400 cursor-not-allowed"
              : "border-red-600 text-red-600 hover:border-red-800 hover:text-red-800"
          }`}
          onClick={handleCancel}
          disabled={isCancelDisabled}
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`mr-2 border-1 rounded-md py-2 ${
            isSubmitDisabled
              ? "border-gray-400 text-gray-400 cursor-not-allowed"
              : "border-blue-600 bg-blue-600 text-white hover:border-blue-800 hover:bg-blue-800"
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default DataInputContainer;
