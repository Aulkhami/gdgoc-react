import React from "react";
import StaggeredGrid from "./StaggeredGrid";

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-slate-50 text-gray-800 px-12 md:px-48 flex flex-col lg:flex-row justify-center items-center h-screen gap-8"
    >
      <div className="flex flex-col gap-8 lg:grow">
        <div className="flex items-end gap-4">
          <img
            src="/me.jpg"
            width={512}
            className="w-40 h-40 rounded-full object-cover object-top border-2 shadow-lg shadow-violet-900"
          />
          <div>
            <h1 className="text-6xl font-bold tracking-wide text-slate-950">
              Rakha
            </h1>
            <small className="block text-lg font-mono font-light">
              Aulkhami
            </small>
          </div>
        </div>
        <p className="font-mono text-2xl max-w-xl">
          Software Engineer, determined to strive for a better future, and
          obsessed with problem solving.
        </p>
      </div>
      <div className="flex justify-center">
        <StaggeredGrid />
      </div>
    </section>
  );
};
