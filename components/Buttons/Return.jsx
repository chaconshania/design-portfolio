import React from "react";
import { Link } from "react-router";

function Return() {
  return (
    <div className="grid grid-cols-1 gap-y-20 px-10 lg:px-20 my-10">
      <Link to="/">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <p className="text-lg">Return</p>
        </div>
      </Link>
    </div>
  );
}

export default Return;
