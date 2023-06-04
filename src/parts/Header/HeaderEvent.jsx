import { BsChevronDown } from "react-icons/bs"
import { HeaderProvider } from "../../context/HeaderContext"
import { useContext } from "react"


const HeaderEvent = () => {

    const { setShowEventDetail } = useContext(HeaderProvider)

    const handleClickEvent = () => {
        //B1. fetch api get data
        //B2 setDataEventDetail
        //B3 setShowEventDetail
        setShowEventDetail(true)

    }
    return (
        <div className="min-w-[200px] h-full">
            <div className="w-full h-full flex justify-center items-center text-white cursor-pointer" onClick={() => handleClickEvent()}>
                <p className="text-sm font-bold uppercase mr-3">welcome</p>
                <p className="h-[20px] font-bold">
                    <BsChevronDown />
                </p>
            </div>
        </div>
    )
}

export default HeaderEvent