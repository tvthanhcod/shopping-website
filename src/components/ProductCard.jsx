import { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"

const ProductCard = ({ data, teaser }) => {

    // this "adidas" product card have 2 case : 'teaser' use what's hot, new product,... no 'teaser' use product pages

    const { id, avatar, name, category, price, state } = data
    const [isWishlist, setWishlist] = useState(false)

    const handleWishlist = (productId) => {
        setWishlist((prev) => !prev)
        console.log("add one product to wishlist, product with id: ", productId)
    }

    return (
        <article className={`product-card-box ${teaser ? 'w-[279px]' : 'w-[300px]'} h-auto cursor-pointer hover:shadow-md transition-hover duration-300 ease-linear`}>
            <div className={`img ${teaser ? 'w-[279px] h-[279px]' : 'w-[300px] h-[300px]'} relative group overflow-hidden`}>
                <img className="w-full h-full object-cover" src={`${avatar}`} alt="Teaser Card" />
                <div className="icon-wishlist absolute top-2 right-2 cursor-pointer" onClick={() => handleWishlist(id)}>
                    <span className={`text-lg ${isWishlist ? 'text-red-600' : ''}`}><AiOutlineHeart /></span>
                </div>
                <div className="price-product absolute w-[76px] h-[24px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">{price}</div>
            </div>
            <div className={`info-product ${teaser ? 'w-[279px] h-[96px]' : 'w-[300px] h-[100px]'} text-m p-3 grid grid-flow-row gap-1`}>
                <p className="name-product text-lg text-black">{name}</p>
                <p className="category-product">{category}</p>
                {state && <p className="state-product text-sm text-blue-400">{state}</p>}
            </div>
        </article>
    )
}

export default ProductCard