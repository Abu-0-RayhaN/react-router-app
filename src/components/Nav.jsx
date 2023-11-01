import { Link } from "react-router-dom";

// import React from 'react'
const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-5">
            <Link to="/">
              <a href="/">Home</a>
            </Link>
            <Link to="about">
              <a href="">About</a>
            </Link>
            <Link to="contact">
              <a href="">Contact</a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
