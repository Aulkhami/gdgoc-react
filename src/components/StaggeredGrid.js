import React from "react";

export default function StaggeredGrid({
  items = [
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
    {
      src: "/me.jpg",
      alt: "ahh",
    },
  ],
}) {
  const gridItems = items.map((v, i) => {
    return (
      <div
        key={i}
        className="flex col-span-2 nth-[4n+3]:col-span-3 nth-[4n+3]:pl-15"
      >
        <div
          className={`w-25 h-25 rounded-xl bg-linear-to-br ${i > 3 ? "md:flex hidden" : ""} ${i % 3 == 0 ? "from-cyan-500 to-blue-500" : i % 2 == 0 ? "from-red-500 to-fuchsia-500" : "from-indigo-500 to-violet-500"} justify-center items-center`}
        >
          {/* <img
            width={256}
            src={v.src}
            alt={v.alt}
            className="w-12 h-12 object-cover"
          /> */}
        </div>
      </div>
    );
  });

  return (
    <div className={`grid grid-cols-[repeat(5,40px)] gap-5`}>{gridItems}</div>
  );
}
