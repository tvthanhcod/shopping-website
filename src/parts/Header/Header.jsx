import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"

import { BsBag } from "react-icons/bs"
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { HiViewList } from "react-icons/hi"

import HeaderEvent from "./HeaderEvent"
import Navbar from "./Navbar"
import { HeaderProvider } from "../../context/HeaderContext"

const Header = () => {

    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const { openNavbar, setOpenNavbar } = useContext(HeaderProvider)

    const handleNavigate = (to) => {
        navigate(`${to}`)
    }

    return (
        <header className="relative">
            <div className="header__top w-full h-[40px] bg-black flex justify-center items-center cursor-pointer">
                <HeaderEvent />
            </div>
            <div className="header__bot w-full h-[80px]  bg-white px-7 flex items-center justify-between">
                <div className="bar w-[120px] h-full text-2xl flex justify-start items-center text-black md:hidden" onClick={() => setOpenNavbar(true)}>
                    <HiViewList />
                </div>
                {openNavbar &&
                    <div className="navbar-responsive-box absolute w-screen h-screen top-0 left-0 right-0 bottom-0 bg-slate-300 md:hidden">
                        <Navbar />
                    </div>
                }
                <div className="logo w-[60px] h-[38px]">
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
                        <div className="search w-[192px] h-[32px] hidden items-center border bg-slate-200 mr-14 md:flex">
                            <input className="pl-2 h-full flex-1 bg-slate-200 outline-none"
                                type="text"
                                placeholder="search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <span className="flex w-[24px] h-[24px] justify-center items-center">
                                <AiOutlineSearch />
                            </span>
                        </div>
                        <div className="user w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl" onClick={() => handleNavigate('user')}>
                            <BiUser />
                        </div>
                        <div className="wishlist w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl" onClick={() => handleNavigate('wishlist')}>
                            <AiOutlineHeart />
                        </div>
                        <div className="cart w-[48px] h-[48px] cursor-pointer flex justify-center items-center text-xl">
                            <BsBag />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header