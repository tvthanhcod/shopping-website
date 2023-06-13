import Header from '../parts/Header/Header'
import { Link } from "react-router-dom"
import HeaderEventDetail from '../parts/Header/HeaderEventDetail'
import { HeaderProvider } from '../context/HeaderContext'
import { useContext } from 'react'

const HeaderOnlyLayout = ({ children }) => {
    const { showEventDetail, dataEventDetail } = useContext(HeaderProvider)
    return (
        <div className='content-wrapper max-w-7xl h-screen mx-auto relative'>
            <Header />
            <main>
                {children}
            </main>
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
            {showEventDetail && <HeaderEventDetail data={dataEventDetail} />}
        </div>
    )
}

export default HeaderOnlyLayout