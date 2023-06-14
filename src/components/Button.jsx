import { useNavigate } from "react-router-dom"
import handleNavigate from '../utils/handleNavigate'
import { BsArrowRight } from "react-icons/bs"

const Button = ({ title, link, white }) => {

    const navigate = useNavigate()

    return (
        <div className={`button-box ${white ? 'bg-white' : 'bg-black'} w-full h-full flex justify-center items-center pl-10 pr-10 relative after:absolute after:w-full after:h-full after:border ${white ? 'after:border-white' : 'after:border-black'} after:top-[5px] after:left-[5px] after:content-[''] cursor-pointer`} onClick={() => handleNavigate(navigate, link)}>
            <span className={`${white ? 'text-black' : 'text-white'} text-lg uppercase font-bold`}>{title}</span>
            <span className={`${white ? 'text-black' : 'text-white'} text-lg ml-3 font-bold`}><BsArrowRight /></span>
        </div>
    )
}

export default Button