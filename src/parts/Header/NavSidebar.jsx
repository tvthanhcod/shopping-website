import { AiOutlineClose } from "react-icons/ai"
import { useContext } from "react"
import { HeaderProvider } from "../../context/HeaderContext"
import Navbar from "./Navbar"


const NavSidebar = () => {

    const { setOpenNavbar } = useContext(HeaderProvider)

    return (
        <div className="navsidebar-box">
            <div className="top w-full h-14 border-b flex relative">
                <div className="logo w-full h-full flex justify-center items-center">
                    <div className="w-[60px] h-[38px]">
                        <img className="w-full h-full object-cover" src="https://img.freepik.com/free-icon/adidas_318-565831.jpg" alt="ADIDAS" />
                    </div>
                </div>
                <div className="close cursor-pointer absolute w-[60px] h-full top-0 right-0 flex justify-center items-center text-xl" onClick={() => setOpenNavbar(false)}>
                    <AiOutlineClose />
                </div>
            </div>
            <main className="w-full h-[calc(100vh-56px)] overflow-y-scroll">
                <div className="main-nav p-2 border-b">
                    <Navbar />
                </div>
                <div className="sub-nav"></div>
            </main>
        </div>
    )
}

export default NavSidebar