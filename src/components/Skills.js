import React from "react";
import * as motion from "motion/react-client";

const mySkills = [
  {
    skill: "HTML/CSS",
    level: 5,
  },
  {
    skill: "TailwindCSS",
    level: 4,
  },
  {
    skill: "JavaScript",
    level: 4,
  },
  {
    skill: "TypeScript",
    level: 4,
  },
  {
    skill: "React",
    level: 3,
  },
  {
    skill: "Svelte",
    level: 4,
  },
  {
    skill: "Node.js",
    level: 3,
  },
  {
    skill: "Java",
    level: 2,
  },
  {
    skill: "Lua",
    level: 5,
  },
  {
    skill: "Ruby",
    level: 2,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-12 md:px-48 py-12">
      <h2 className="font-extrabold text-2xl text-center mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {mySkills.map((v, i) => (
          <motion.div
            key={i}
            className="h-12 w-64"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 * i }}
            viewport={{ once: true }}
          >
            <h6 className="font-bold font-mono">{v.skill}</h6>
            <div className="h-2 rounded-full flex bg-slate-950 shadow-md shadow-violet-950">
              {Array.from({ length: 5 }, (_, j) => (
                <motion.div
                  key={j}
                  className={`h-full w-auto grow ${j == 0 ? "rounded-l-full" : "-ml-px"} ${j == 4 ? "rounded-r-full" : ""} ${v.level > j ? "bg-violet-500" : "bg-cyan-300/10"}`}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 0.1,
                    delay: 0.25 + 0.25 * i + 0.1 * j,
                  }}
                  viewport={{ once: true }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
