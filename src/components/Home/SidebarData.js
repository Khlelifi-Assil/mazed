import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Mazed",
	path: "/encherir",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Publier",
	path: "/annonce",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <AiIcons.AiOutlineWifi />,
	iconOpened: <AiIcons.AiOutlineWifi />,

},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},

];
