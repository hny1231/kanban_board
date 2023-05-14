import {
    CiCalendar,
    CiGrid42,
    CiFolderOn,
    CiSquareChevLeft,
    CiSquareChevRight,
    CiMenuKebab,
} from "react-icons/ci";

import {
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

import { MdExposurePlus1 } from "react-icons/md";

const icons = {
    boardIcon: <CiFolderOn />,
    calendarIcon: <CiCalendar />,
    dashboardIcon: <CiGrid42 />,
    rightArrowIcon: <HiOutlineArrowNarrowRight />,
    leftArrowIcon: <HiOutlineArrowNarrowLeft />,
    folderCloseIcon: <CiSquareChevLeft className="folder_close" />,
    folderOpenIcon: <CiSquareChevRight className="folder_open" />,
    menuKebabIcon: <CiMenuKebab />,
    plusIcon: <MdExposurePlus1 />,
};

export default icons;
