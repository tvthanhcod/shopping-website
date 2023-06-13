
import { AiOutlineClose } from "react-icons/ai"

const ItemProductCart = () => {

    const handleSelectValue = () => {

    }

    return (
        <div className="w-full h-full flex border border-black overflow-hidden relative">
            <div className="img-item w-[197px] h-[197px] md:w-[240px] md:h-[240px]">
                <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ec960dfe508c4aef8decaf89012e2e50_9366/HQ6341_550_HQ6341_01_standard.jpg.jpg?sh=364&strip=false&sw=364" alt="ADIDAS" />
            </div>
            <div className="info-item flex-1 pl-5 flex flex-col justify-center">
                <div className="name-and-price text-m md:text-lg flex">
                    <p className="name-product text-black uppercase mr-14">ULTRABOOST LIGHT SHOES</p>
                    <p className="text-red-600">4,420,000</p>
                </div>
                <p className="info text-m md:text-lg uppercase">SOLAR RED / CORE BLACK / CLOUD WHITE</p>
                <p className="text-m md:text-lg uppercase">SIZE: 4.5 UK</p>
                <p className="text-m font-bold">Low in stock</p>
                <div className="w-[75px] h-[45px] md:w-[100px] md:h-[58px] border border-black pt-3 pb-3 pl-4 pr-4 mt-5">
                    <select className="w-full h-full outline-none text-lg" defaultValue={1} onChange={handleSelectValue()}>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                    </select>
                </div>
            </div>
            <div className="remove-item absolute font-xl top-4 right-4 cursor-pointer">
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default ItemProductCart