import React, { useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
    Collapse,
    Badge,
} from "@material-tailwind/react";

import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    PowerIcon,
    Bars2Icon,
    ChatBubbleBottomCenterIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";

import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import Modal from "../modals/Modal";
import SidebarDrawer from "../drawer/SidebarDrawer";
import { useDisclosure } from "@chakra-ui/react";


// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu({ user, openModal, setOpenModal }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    const navigate = useNavigate()

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.clear();
        navigate('/')
    }

    const handleModal = () => {
        setOpenModal(!openModal);
    }


    const handleClick = (label) => {
        switch (label) {
            case "My Profile":
                handleModal();
                console.log("myprofile")
                break;

            case "Edit Profile":
                // handleEditProfileClick();
                console.log("edit")
                break;

            case "Inbox":
                // handleInboxClick();
                console.log("inbox")
                break;

            case "Sign Out":
                handleLogout();
                break;

            default:
                break;
        }

        closeMenu();
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen}>
            <MenuHandler>
                <Button
                    variant="text"
                    color="white"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Badge withBorder overlap="circular" placement="top-end">
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="User"
                            className="border border-blue-500 p-0.5"
                            src={user.pic}
                        />
                    </Badge>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={() => handleClick(label)}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}


// nav list component
const navListItems = [
    {
        label: "New Chat",
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        label: "New Group",
        icon: UserGroupIcon,
    },
];

function NavList({ onOpen }) {
    return (
        <ul className="mb-4 mt-2 flex flex-row justify-center gap-2 lg:mb-0 lg:mt-0 lg:items-center">
            {navListItems.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="black"
                    className="font-semibold bg-[#CCE2D1] lg:rounded-2xl rounded-md"
                    onClick={onOpen}
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        {label}
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);

    // For Drawer
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [user, setUser] = useState({})


    useEffect(() => {

        setUser(JSON.parse(localStorage.getItem("userInfo")));

        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );

    }, []);

    return (
        <>
            <Navbar
                color="green" fullWidth className="py-2 md:px-40 scrollbar-hide">
                <div className="relative mx-auto flex items-center text-blue-gray-900">
                    <Typography
                        // as="a"
                        // href="#"
                        color="white"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-semibold text-xl flex flex-row place-items-center"
                    >
                        <img src="/icon4.svg" alt="" className="w-9 h-9 -mr-1 rounded-lg" />
                        renspace
                    </Typography>
                    <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                        <NavList onOpen={onOpen} />
                    </div>
                    <IconButton
                        size="sm"
                        color="white"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="ml-auto mr-2 lg:hidden"
                    >
                        <Bars2Icon className="h-7 w-7" />
                    </IconButton>
                    <ProfileMenu user={user} openModal={openModal} setOpenModal={setOpenModal} />
                </div>
                <Collapse open={isNavOpen} className="overflow-scroll">
                    <NavList onOpen={onOpen} />
                </Collapse>
            </Navbar>

            {/* Profile Modal */}
            <Modal openModal={openModal} setOpenModal={setOpenModal} user={user} />

            {/* Drawer */}
            <SidebarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}