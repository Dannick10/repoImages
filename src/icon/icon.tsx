import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMdImages } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";

export function UserIcon() {
    return <HiMiniUserCircle /> 
}

export function SearchIcon() {
    return <IoSearchOutline />
}

export function ImageIcon() {
    return <IoMdImages />
}

export function ArrowDown() {
    return <IoIosArrowDown />
}

export function LinkedinIcon() {
    return < FaLinkedin />
}

export function GithubIcon() {
    return <FaGithubAlt />
} 

export function DevIcon() {
    return <RiCodeView />
}