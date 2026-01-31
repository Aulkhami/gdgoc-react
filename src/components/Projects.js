import React from "react";
import * as motion from "motion/react-client";

const myProjects = [
  {
    image: "/codeout.png",
    name: "CodeOut",
    description:
      "A gamified code learning platform for developers to challenge themselves and compete using their coding skills, developed using SvelteKit",
  },
  {
    image: "/combat-tech.png",
    name: "Gun Combat Tech - Roblox",
    description:
      "Gun-based combat system used for a Roblox game currently in development, utilizing raycasting for the projectile physics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-12 md:px-48 py-12">
      <motion.h2
        className="font-extrabold text-2xl text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="flex flex-wrap gap-12 justify-center">
        {myProjects.map((v, i) => (
          <motion.div
            key={i}
            className="bg-linear-to-br text-slate-50 from-slate-800 to-slate-950 w-sm min-h-96 rounded-lg shadow-sm shadow-violet-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 * i }}
          >
            <img
              width={512}
              src={v.image}
              className="w-full object-cover rounded-t-lg h-48"
            />
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-xl font-mono font-bold pb-4 border-b-2 border-slate-500">
                {v.name}
              </h3>
              <p>{v.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
