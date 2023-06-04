
import { createContext, useState } from "react";


export const HeaderProvider = createContext()

const HeaderContext = ({ children }) => {

    const [openNavbar, setOpenNavbar] = useState(false)
    const [showEventDetail, setShowEventDetail] = useState(false)
    const [dataEventDetail, setDataEventDetail] = useState([])


    const options = {
        openNavbar,
        setOpenNavbar,
        showEventDetail,
        setShowEventDetail,
        dataEventDetail,
        setDataEventDetail
    }

    return (
        <HeaderProvider.Provider value={options}>
            {children}
        </HeaderProvider.Provider>
    )
}

export default HeaderContext