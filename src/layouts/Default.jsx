import Header from '../parts/Header/Header'
import Footer from '../parts/Footer/Footer'
import HeaderEventDetail from '../parts/Header/HeaderEventDetail'
import { HeaderProvider } from '../context/HeaderContext'
import { useContext } from 'react'

const DefaultLayout = ({ children }) => {

    const { showEventDetail, dataEventDetail } = useContext(HeaderProvider)

    return (
        <div className='content-wrapper max-w-7xl h-screen mx-auto relative'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            {showEventDetail && <HeaderEventDetail data={dataEventDetail} />}
        </div>
    )

}
export default DefaultLayout
