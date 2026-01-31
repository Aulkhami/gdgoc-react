import React from "react";

export default function Footer() {
  return (
    <section
      id="footer"
      className="px-12 md:px-48 py-6 bg-slate-800 text-slate-50 flex justify-between items-center"
    >
      <p>Rakha (Aulkhami)</p>
      <div id="contact" className="flex gap-4">
        <p>Contacts:</p>
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/Aulkhami/">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aulia-rakha-ilhami-392522236/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
