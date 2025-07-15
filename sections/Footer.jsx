import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex justify-center items-center flex-col gap-10 bg-stone-950 text-stone-100 p-10">
        <aside>
          <br />
          <p className="text-center">Designed and Developed by Me</p>
          <p className="text-center">Copyright © {new Date().getFullYear()}</p>
        </aside>
        <nav></nav>
      </footer>
    </div>
  );
}

export default Footer;
