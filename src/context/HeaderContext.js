
import { createContext, useState } from "react";


export const HeaderProvider = createContext()

const HeaderContext = ({ children }) => {

    const [openNavbar, setOpenNavbar] = useState(false)
    const [showEventDetail, setShowEventDetail] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [dataEventDetail, setDataEventDetail] = useState([])
    const [inputSearch, setInputSearch] = useState('')


    const options = {
        openNavbar,
        setOpenNavbar,
        showEventDetail,
        setShowEventDetail,
        dataEventDetail,
        setDataEventDetail,
        inputSearch,
        setInputSearch,
        openSearch,
        setOpenSearch
    }

    return (
        <HeaderProvider.Provider value={options}>
            {children}
        </HeaderProvider.Provider>
    )
}

export default HeaderContext