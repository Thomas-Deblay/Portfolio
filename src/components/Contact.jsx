import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/b14de684-31a5-4c84-937a-4538caf8435d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1af8ae] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Envoyez moi un message - thomasdeblay.dev@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Nom"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#1af8ae] hover:border-[#1af8ae] px-4 py-3 my-8 mx-auto flex items-center">
          Travaillons ensemble
        </button>
      </form>
    </div>
  );
};

export default Contact;
