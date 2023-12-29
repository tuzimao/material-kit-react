import ChatBubbleLeftIcon from "@heroicons/react/24/solid/ChatBubbleLeftIcon";
import FolderIcon from "@heroicons/react/24/solid/FolderIcon";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Chat",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChatBubbleLeftIcon />
      </SvgIcon>
    ),
  },
  {
    title: "History",
    path: "/companies",
    icon: (
      <SvgIcon fontSize="small">
        <ArrowPathIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Files",
    path: "/customers",
    icon: (
      <SvgIcon fontSize="small">
        <FolderIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Account",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Register",
    path: "/auth/register",
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Error",
    path: "/404",
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    ),
  },
];
