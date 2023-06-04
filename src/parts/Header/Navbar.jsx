import { useNavigate, useLocation } from "react-router-dom"


const Navbar = () => {

    const navigate = useNavigate()
    const currentLocation = useLocation().pathname

    const handleNavigate = (link) => {
        navigate(`${link}`)
    }

    const handleActiveLink = (link) => {
        return currentLocation === link ? 'active' : ''
    }


    return (
        <nav className="navbar h-full flex justify-between items-center mr-14">
            <ul className="navbar__list h-full flex items-center font-bold flex-col md:flex-row">
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 ml-0 relative group ${handleActiveLink('/men')}`} onClick={() => handleNavigate('/men')}>men
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100 hidden md:block"></div>
                </li>
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 relative group ${handleActiveLink('/women')}`} onClick={() => handleNavigate('/women')} >women
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100 hidden md:block"></div>
                </li>
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 relative group ${handleActiveLink('/kids')}`} onClick={() => handleNavigate('/kids')}>kids
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100 hidden md:block"></div>
                </li>
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 relative group ${handleActiveLink('/sports')}`} onClick={() => handleNavigate('/sports')}>sports
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100 hidden md:block"></div>
                </li>
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 relative group ${handleActiveLink('/brands')}`} onClick={() => handleNavigate('/brands')}>brands
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100 hidden md:block"></div>
                </li>
                <li className={`navbar__item h-full flex items-center pl-4 md:pl-0 jutify-center cursor-pointer text-lg uppercase mx-0 md:mx-7 mr-0 relative group ${handleActiveLink('/outlet')}`} onClick={() => handleNavigate('outlet')}>outlet
                    <div className="border-animate h-[3px] bg-black absolute transition-all duration-200 ease-linear bottom-0 left-0 right-0 origin-top-left scale-x-0 scale-y-100 group-hover:scale-x-100"></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar