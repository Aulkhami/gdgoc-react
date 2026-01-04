import React from "react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 text-gray-800 py-12 px-12 flex justify-around"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Rakha</h1>
        <p>Hi! I am Aulia Rakha Ilhami</p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/me.jpg"
          width={512}
          className="w-32 h-32 rounded-full object-cover object-top border-2 shadow-lg shadow-fuchsia-500"
        />
      </div>
    </section>
  );
};
