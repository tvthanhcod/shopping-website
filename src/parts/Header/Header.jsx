import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import { BsBag } from "react-icons/bs"
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { HiViewList } from "react-icons/hi"

import HeaderEvent from "./HeaderEvent"
import Navbar from "./Navbar"
import Search from "./Search"
import SearchSidebar from "./SearchSidebar"
import NavSidebar from "./NavSidebar"
import { HeaderProvider } from "../../context/HeaderContext"

const Header = () => {

    const navigate = useNavigate()

    const { openNavbar, setOpenNavbar, openSearch, setOpenSearch } = useContext(HeaderProvider)


    const handleNavigate = (to) => {
        navigate(`${to}`)
    }

    return (
        <header className="border-b">
            <div className="header__top w-full h-[40px] bg-black flex justify-center items-center cursor-pointer">
                <HeaderEvent />
            </div>
            <div className="header__bot w-full h-[80px]  bg-white px-7 flex items-center justify-between">
                <div className="bar cursor-pointer w-[120px] h-full text-2xl flex justify-start items-center text-black md:hidden" onClick={() => setOpenNavbar(true)}>
                    <HiViewList />
                </div>
                <div className="logo w-[60px] h-[38px] cursor-pointer" onClick={() => handleNavigate('/')}>
                    <img className="w-full h-full object-cover" src="https://img.freepik.com/free-icon/adidas_318-565831.jpg" alt="ADIDAS" />
                </div>
                <div className="header__bot-content flex flex-col justify-between">
                    <ul className="w-full h-[32px] feature__top hidden list-none justify-end items-center text-s md:flex">
                        <li className="mx-4 ml-0 cursor-pointer hover:underline" onClick={() => handleNavigate('/help')}>help</li>
                        <li className="mx-4 cursor-pointer hover:underline" onClick={() => handleNavigate('/ordertracker')}>order tracker</li>
                        <li className="mx-4 cursor-pointer hover:underline" onClick={() => handleNavigate('/becomeamember')}>become a member</li>
                        <li className="mx-4 cursor-pointer hover:underline" onClick={() => handleNavigate('/adiclub')}>adiclub</li>
                        <li className="mx-4 cursor-pointer hover:underline mr-0" onClick={() => handleNavigate('/login')}>login</li>
                    </ul>
                    <div className="feature__bot flex items-center h-[48px] ">
                        <div className="h-full hidden md:block">
                            <Navbar />
                        </div>
                        <div className="search-box w-[192px] h-[32px] mr-14 hidden md:block">
                            <Search />
                        </div>
                        <div className="user w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl" onClick={() => handleNavigate('user')}>
                            <BiUser />
                        </div>
                        <div className="wishlist w-[48px] h-[48px] cursor-pointer hidden justify-center items-center text-xl md:flex" onClick={() => handleNavigate('wishlist')}>
                            <AiOutlineHeart />
                        </div>
                        <div className="search-icon-responsive w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl md:hidden" onClick={() => setOpenSearch(true)}>
                            <AiOutlineSearch />
                        </div>
                        <div className="cart w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl">
                            <BsBag />
                        </div>
                    </div>
                </div>
            </div>
            {openNavbar &&
                <div className="navbar-responsive-box absolute w-screen h-screen top-0 left-0 right-0 bottom-0 bg-white md:hidden">
                    <NavSidebar />
                </div>
            }
            {openSearch &&
                <div className="absolute w-screen h-screen top-0 left-0 right-0 bottom-0 bg-white">
                    <SearchSidebar />
                </div>
            }
        </header>
    )
}
export default Header