import { FaDownload } from "react-icons/fa6";

export default function Nav() {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Destination</a>
      </li>
      <li>
        <a>Search</a>
      </li>
    </>
  );

  return (
    <nav className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="font-bold btn-ghost text-xl md:text-3xl">
            <span className="text-orange-500 text-xl md:text-3xl">In-</span>Bio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="bg-orange-100 font-bold gap-3 p-2 px-4 hover:bg-orange-200 flex rounded-md border-orange-500 border text-orange-500 cursor-pointer">
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
