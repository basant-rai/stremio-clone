import { HiHome } from "react-icons/hi2";
import { AiFillCompass } from "react-icons/ai";
import { Link } from "react-router-dom";


const SideBar = () => {

  const SidebarList = [
    {
      name: "Home",
      icon: HiHome,
      path: "/"
    },
    {
      name: "Discover",
      icon: AiFillCompass,
      path: "/discover"
    },
  ]

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >

        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-6 font-medium">
            {
              SidebarList.map((sidebar, idx) => (
                <li key={idx}>
                  <Link
                    to={sidebar.path}
                    className="flex items-center  h-10 w-10 justify-center p-1 rounded-full text-gray-900 hover:bg-gray-100  group"
                  >
                    <sidebar.icon className="text-white h-8 w-8  group-hover:text-primary-900" />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
