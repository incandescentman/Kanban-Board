import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import AddSquare from "../../svg/addsquare.svg";
import Lamp from "../../svg/lamp.svg";
import MySvg from "../../svg/colorfilter.svg";
import { RxDoubleArrowLeft } from "react-icons/rx";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname, isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          height: "auto",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          height: "100vh",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed"
      >
        <div className="flex items-center justify-between gap-2.5 font-medium border-b pb-6 pt-5 border-[#DBDBDB]">
          <div
            className={`flex items-center mx-5 gap-2.5 ${
              open ? "block" : "hidden"
            }`}
          >
            <img src={MySvg} width={24} height={24} alt="logo" />
            <span className="whitespace-pre font-inter font-semibold text-[20px] leading-6 text-purple-900">
              Post-OpenAI Plan
            </span>
          </div>

          <motion.div
            onClick={() => {
              setOpen(!open);
            }}
            animate={
              open
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {
                    x: 10,
                    y: 0,
                    rotate: 180,
                  }
            }
            transition={{ duration: 0 }}
            className="w-fit h-fit  z-50  right-2 bottom-3 cursor-pointer"
          >
            <RxDoubleArrowLeft
              className="text-[#787486] text-[18px] cursor-pointer mr-3"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          {(open || isTabletMid) && (
            <div className="py-5 px-2.5">
                <div className="flex items-center justify-between gap-2.5">
                  <small className="capitalize pl-3 text-slate-500 inline-block mb-2 font-bold text-[12px]">
                    my projects
                  </small>
                  <img src={AddSquare} w="24px" h="24px" alt="home" />
                </div>
                <div className="flex flex-col">
                  <ul className="whitespace-pre px-2 py-5 flex flex-col font-medium">
                    <NavLink
                      to={"/1"}
                      className="w-full mb-1 py-3 px-2 flex flex-row items-center gap-5"
                    >
                      <p className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></p>
                      <p > July Tasks</p>
                    </NavLink>
                    <NavLink
                      to={"/2"}
                      className="w-full mb-1 py-3 px-2 flex flex-row  items-center gap-5 "
                    >
                      <p className="bg-[#FFA500] rounded-full w-[8px] h-[8px]"></p>
                      <p> AI Job Hunt</p>
                    </NavLink>
                    <NavLink
                      to={"/3"}
                      className="w-full mb-1 py-3 px-2 flex flex-row  items-center gap-5 "
                    >
                      <p className="bg-[#E4CCFD] rounded-full w-[8px] h-[8px]"></p>
                      <p> Academic Job Hunt</p>
                    </NavLink>
                    <NavLink
                      to={"/4"}
                      className="w-full mb-1 py-3 px-2 flex flex-row  items-center gap-5 "
                    >
                      <p className="bg-[#76A5EA] rounded-full w-[8px] h-[8px]"></p>
                      <p>Substack and Writing</p>
                    </NavLink>
                  </ul>
                </div>
              </div>


          )}
        </div>

        {(open || isTabletMid) && (
          <div className="w-[85%]  relative m-auto mb-2 p-5 mt-6 rounded-lg bg-[#F5F5F5] flex flex-col items-center gap-3">
            <div className="w-full absolute top-[-1.5rem] flex justify-center mb-[-rem]">
              <span className="bg-gradient-to-b from-pink-200 to-[#F5F5F5] p-4 rounded-full ">
                <img src={Lamp} alt="lamp" />
              </span>
            </div>
            <p className="font-medium	text-[14px] mt-6">Thoughts Time</p>
            <p className="mb-3 text-[12px] text-[#787486] text-center font-normal">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <p>
              <input
                type="text"
                placeholder="Write a message"
                className="text-black w-[100%] m-auto text-center font-medium text-[14px] bottom-0 outline-0 border-white	rounded	"
              />
            </p>
          </div>
        )}
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
