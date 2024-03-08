import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="Contact" className="flex flex-wrap items-center justify-center ">
      <div className="flex flex-col items-center justify-center m-4 text-white">
        <div className="flex flex-col items-center justify-center p-2 m-2">
          <h1 className="p-2 m-2 text-5xl font-bold text-center">Contact</h1>
          <h2 className="p-2 m-2 text-4xl text-center">
            {" "}
            Feel free to reach out me for any questions or opportunities
          </h2>
        </div>
        <div className="flex flex-col w-1/2 p-6 text-white border border-white rounded-2xl">
          <h1 className="p-1 m-2 text-4xl font-semibold text-white">
            Email Me🚀
          </h1>
          <input
            type="email "
            className="p-3 m-2 text-2xl bg-transparent border shadow-2xl rounded-2xl "
            placeholder="Your Email"
          ></input>
          <input
            type="text"
            className="p-3 m-2 text-2xl bg-transparent border border-white shadow-2xl rounded-2xl"
            placeholder="Your Name"
          ></input>
          <input
            type="text"
            className="p-3 m-2 text-2xl bg-transparent border border-white shadow-2xl rounded-2xl"
            placeholder="Subject"
          ></input>
          <input
            type="message"
            className="p-3 m-2 text-2xl bg-transparent border border-white shadow-2xl rounded-2xl"
            placeholder="Message"
          ></input>
          <button className="p-3 m-2 text-2xl bg-transparent border border-white shadow-2xl rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
