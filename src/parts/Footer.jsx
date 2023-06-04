import { Link } from "react-router-dom"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="w-full h-auto">
            <div className="become-member w-full h-[132px] flex justify-center items-center bg-yellowFooter">
                <p className="title uppercase text-2xl font-bold">become a member & get 15% off</p>
                <div className="button"></div>
            </div>
            <div className="top w-full h-auto py-3 hidden md:block">
                <div className="main w-full h-auto flex px-28">
                    <div className="box-about basis-1/6 max-h-[300px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">products</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1"><Link to="/shoes">Shoes</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Clothing</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Accessories</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">New Arrivals</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Release Dates</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Top Sellers</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Member exclusives</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Outlet</Link></li>
                        </ul>
                    </div>
                    <div className="box-about basis-1/6 h-[335px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">COMPANY INFO</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1"><Link to="/shoes">About Us</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Careers</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Press</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">adidas Blog</Link></li>
                        </ul>
                    </div>
                    <div className="box-about basis-1/6 max-h-[300px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">SUPPORT</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1"><Link to="/shoes">Help & Customer Service</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Store Locator</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Size Charts</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">New Arrivals</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Release Dates</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Top Sellers</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Member exclusives</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Outlet</Link></li>
                        </ul>
                    </div>
                    <div className="box-about basis-1/6 max-h-[300px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">SPORTS</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1"><Link to="/shoes">Running</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Golf</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Gym & Training</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">New Football</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Basketball</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Tennis</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Outdoor</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Swimming</Link></li>
                        </ul>
                    </div>
                    <div className="box-about basis-1/6 max-h-[300px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">COLLECTIONS</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1"><Link to="/shoes">IVY PARK</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Pharrell Williams</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Ultraboost</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Pureboost</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Predator</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Continental 80</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Superstar</Link></li>
                            <li className="item-about mb-1"><Link to="/shoes">Stan Smith</Link></li>
                        </ul>
                    </div>
                    <div className="box-about basis-1/6 max-h-[300px] text-m overflow-hidden flex flex-col p-4">
                        <h3 className="title text-xl text-black font-extrabold uppercase mb-2">FOLLOW US</h3>
                        <ul className="list-about">
                            <li className="item-about mb-1 text-xl"><Link to="/shoes"><BsFacebook /></Link></li>
                            <li className="item-about mb-1 text-xl"><Link to="/shoes"><AiFillInstagram /></Link></li>
                            <li className="item-about mb-1 text-xl"><Link to="/shoes"><AiFillTwitterCircle /></Link></li>
                            <li className="item-about mb-1 text-xl"><Link to="/shoes"><FaTiktok /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bot w-full h-[169px] md:h-[77px] bg-grayFooter">
                <ul className="list w-full h-full flex justify-center items-center flex-wrap py-2 md:py-0">
                    <li className="item mx-3 text-white text-m w-[150px] flex justify-center items-center md:w-auto md:text-sm md:border-l border-white md:pl-4 first:border-l-0 first:ml-0 last:mr-0">
                        <Link to="/privacy-policy">Cookie Setting</Link>
                    </li>
                    <li className="item mx-3 text-white text-m w-[150px] flex justify-center items-center md:w-auto md:text-sm md:border-l border-white md:pl-4 first:border-l-0 first:ml-0 last:mr-0">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="item mx-3 text-white text-m w-[150px] flex justify-center items-center md:w-auto md:text-sm md:border-l border-white md:pl-4 first:border-l-0 first:ml-0 last:mr-0">
                        <Link to="/privacy-policy">Terms and Conditions</Link>
                    </li>
                    <li className="item mx-3 text-white text-m w-[150px] flex justify-center items-center md:w-auto md:text-sm md:border-l border-white md:pl-4 first:border-l-0 first:ml-0 last:mr-0">
                        <Link to="/privacy-policy">Imprint</Link>
                    </li>
                    <li className="item mx-3 text-white text-m w-[250px] flex justify-center items-center md:w-auto md:text-sm md:border-l border-white md:pl-4 first:border-l-0 first:ml-0 last:mr-0">
                        <Link to="/privacy-policy">&copy;  2023 adidas Vietnam Company Limited</Link>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer