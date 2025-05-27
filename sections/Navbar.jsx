import React from "react";
import { Link, Links } from "react-router";

function Navbar() {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-2 m-4 grid-cols-2">
          <div className="flex items-start justify-center flex-col">
            <img
              src="/assets/Images/Logo.png"
              alt=""
              className="md:h-20 h-15"
            />
          </div>
          <div className="w-full text-black p-4 rounded-lg h-30 flex items-center gap-10 justify-end">
            <Link to="/" className="hover:text-[#898989] duration-200 ease-in">
              Work
            </Link>
            <Link
              to="/about"
              className="hover:text-[#898989] duration-200 ease-in"
            >
              About
            </Link>
            <a
              href="https://drive.google.com/file/d/18N20jg2oWwrbI11mXofU1TpDUDKwgsWN/view?usp=sharing"
              target="_blank"
              className="hover:text-[#898989] duration-200 ease-in"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
