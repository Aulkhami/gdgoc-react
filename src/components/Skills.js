import React from "react";

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
          <div key={i} className="h-12 w-64">
            <h6 className="font-bold font-mono">{v.skill}</h6>
            <div className="h-2 rounded-full flex bg-slate-950 shadow-md shadow-violet-950">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`h-full w-auto grow ${i == 0 ? "rounded-l-full" : ""} ${i == 4 ? "rounded-r-full" : ""} ${v.level > i ? "bg-violet-500" : "bg-cyan-300/10"}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
