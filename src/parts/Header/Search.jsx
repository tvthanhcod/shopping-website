import { AiOutlineSearch } from "react-icons/ai"
import { useContext } from "react"
import { HeaderProvider } from "../../context/HeaderContext"

const Search = () => {

    const { inputSearch, setInputSearch } = useContext(HeaderProvider)

    return (
        <div className="w-full h-full hidden items-center border bg-slate-200 md:flex">
            <input className="pl-2 h-full flex-1 bg-slate-200 outline-none"
                type="text"
                placeholder="search"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <span className="flex w-[24px] h-[24px] justify-center items-center">
                <AiOutlineSearch />
            </span>
        </div>
    )
}

export default Search