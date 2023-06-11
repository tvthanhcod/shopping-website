import { TfiAngleLeft } from "react-icons/tfi"
import { HeaderProvider } from "../../context/HeaderContext"
import { useRef, useContext } from "react"

const SearchSidebar = () => {

    const inputElement = useRef()

    const { setOpenSearch, inputSearch, setInputSearch } = useContext(HeaderProvider)

    const handleSubmitInput = (e) => {
        if (e.key === 'Enter') {
            //fetch api
            setInputSearch('')
            inputElement.current.focus()
            setOpenSearch(false)
        }
    }

    return (
        <div className="search-sidebar w-full h-11 absolute top-0 left-0 flex bg-slate-200 items-center">
            <div className="icon-back cursor-pointer text-xl text-black w-[50px] h-full flex justify-center items-center" onClick={() => setOpenSearch(false)}>
                <TfiAngleLeft />
            </div>
            <input
                ref={inputElement}
                type="text"
                className="input-search flex-1 outline-none pl-3 bg-slate-200"
                placeholder="Search"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                onKeyDown={(e) => handleSubmitInput(e)}
            />
            {inputSearch.length > 0 &&
                <div className="text-lg text-black w-[80px] h-full flex justify-center items-center cursor-pointer hover:font-bold" onClick={() => setInputSearch('')}>clear</div>
            }
        </div>
    )
}

export default SearchSidebar