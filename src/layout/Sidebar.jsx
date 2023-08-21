import {
  BsArrowLeftShort,
  BsSearch,
  BsPerson,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutSidebarReverse,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Serviço", icon: <AiOutlineFileText />,
      submenu: true,
      submenuItems: [
        { title: "Novo" },
        { title: "Ver " },
      ]
    },
    { title: "Produto", icon: <BsFillImageFill />,
      submenu: true,
      submenuItems: [
        { title: "Adicionar Produtos" },
        { title: "Produtos Cadastrados" },
      ]
    },
    { title: "Conta", spacing: true, icon: <AiOutlineBarChart /> },
    { title: "Financeiro", icon: <BsPerson /> },
    { title: "Settings", spacing: true, icon: <AiOutlineSetting /> },
    { title: "Sair", icon: <AiOutlineLogout /> },
    /*{
      title: "Projects",
      icon: <BsReverseLayoutSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },*/
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`
          bg-white text-dark-purple
            text-3xl rounded-full absolute 
            -right-3 top-9 border
          border-dark-purple cursor-pointer 
            ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`
            bg-amber-300 text-4xl
            rounded cursor-pointer block float-left 
            mr-2 duration-500
             ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`
            text-white origin-letf font-medium 
             text-2xl duration-300 ${!open && "scale-0"}`}
          >
            Tailwind
          </h1>
        </div>


        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 
                text-sm flex item-center gap-x-4 cursor-pointer 
                p2-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 
                    text-sm flex items-center gap-x-4 cursor-pointer 
                    p-3 px-5 hover:bg-light-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7"></div>
    </div>
  );
};

export default Sidebar;
