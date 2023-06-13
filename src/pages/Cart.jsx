import ItemProductCart from "../components/ItemProductCart"
import SliderWithSlick from "../components/Slider"
import { settingTopPickCart } from "../utils/settingSlider"
import { FaShippingFast } from "react-icons/fa"
import { TbTruckReturn } from "react-icons/tb"
import Button from "../components/Button"
import HeaderOnlyLayout from "../layouts/HeaderOnly"

const Cart = () => {
    return (
        <HeaderOnlyLayout>
            <div className="pt-16 pb-16 pl-3 pr-3 md:p-16 grid md:grid-flow-col gap-7">
                <div className="w-[450px] md:w-full md:grid-cols-[719px]">
                    <div className="welcome w-full md:w-[719px] h-[90px] bg-newGray flex items-center pl-10 uppercase text-2xl font-extrabold relative before:content-['']  before:absolute before:left-7 before:bottom-[-10px] before:border-l-[10px] before:border-r-[10px] before:border-t-[10px] before:border-transparent before:border-t-newGray">hello Thanh</div>
                    <div className="content mt-7">
                        <h2 className="title text-3xl uppercase text-black font-bold">your bag</h2>
                        <p className="text-lg mt-3 mb-3 text-black font-medium">{"TOTAL (3 items) 10,000,000"}</p>
                        <p className="text-m text-black font-medium">Items in your bag are not reserved — check out now to make them yours.</p>
                        <ul className="list-item mt-8 mb-8">
                            <li className="w-[450px] md:w-[719px] h-[241px] mt-4 first:mt-0">
                                <ItemProductCart />
                            </li>
                            <li className="w-[450px] md:w-[719px] h-[241px] mt-4 first:mt-0">
                                <ItemProductCart />
                            </li>
                        </ul>
                    </div>
                    <div className="top-pick mt-10">
                        <h2 className="title uppercase text-4xl font-bold mb-5">top picks for you</h2>
                        <div className="content w-full md:w-[719px] h-[220px] overflow-hidden">
                            <SliderWithSlick setting={settingTopPickCart}>
                                <div className="top-pick-card w-[208px] h-[auto]">
                                    <article className="item w-full h-full">
                                        <div className="img w-[208px] h-[208px] relative group">
                                            <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea38c9ad02c14317b731ad6e00cc6fc8_9366/GZ5921_01_standard.jpg" alt="ADIDAS" />
                                            <div className="price-product absolute w-[73px] h-[26px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">950000</div>
                                        </div>
                                        <p className="name text-lg font-bold max-w-full text-ellipsis mt-4">Adilette Shower Slides</p>
                                    </article>
                                </div>
                                <div className="top-pick-card w-[208px] h-[auto]">
                                    <article className="item w-full h-full">
                                        <div className="img w-[208px] h-[208px] relative group">
                                            <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea38c9ad02c14317b731ad6e00cc6fc8_9366/GZ5921_01_standard.jpg" alt="ADIDAS" />
                                            <div className="price-product absolute w-[73px] h-[26px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">950000</div>
                                        </div>
                                        <p className="name text-lg font-bold max-w-full text-ellipsis mt-4">Adilette Shower Slides</p>
                                    </article>
                                </div>
                                <div className="top-pick-card w-[208px] h-[auto]">
                                    <article className="item w-full h-full">
                                        <div className="img w-[208px] h-[208px] relative group">
                                            <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea38c9ad02c14317b731ad6e00cc6fc8_9366/GZ5921_01_standard.jpg" alt="ADIDAS" />
                                            <div className="price-product absolute w-[73px] h-[26px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">950000</div>
                                        </div>
                                        <p className="name text-lg font-bold max-w-full text-ellipsis mt-4">Adilette Shower Slides</p>
                                    </article>
                                </div>
                                <div className="top-pick-card w-[208px] h-[auto]">
                                    <article className="item w-full h-full">
                                        <div className="img w-[208px] h-[208px] relative group">
                                            <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea38c9ad02c14317b731ad6e00cc6fc8_9366/GZ5921_01_standard.jpg" alt="ADIDAS" />
                                            <div className="price-product absolute w-[73px] h-[26px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">950000</div>
                                        </div>
                                        <p className="name text-lg font-bold max-w-full text-ellipsis mt-4">Adilette Shower Slides</p>
                                    </article>
                                </div>
                                <div className="top-pick-card w-[208px] h-[auto]">
                                    <article className="item w-full h-full">
                                        <div className="img w-[208px] h-[208px] relative group">
                                            <img className="w-full h-full object-cover" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea38c9ad02c14317b731ad6e00cc6fc8_9366/GZ5921_01_standard.jpg" alt="ADIDAS" />
                                            <div className="price-product absolute w-[73px] h-[26px] bottom-0 left-1 flex justify-center items-center bg-white text-m group-hover:translate-y-[-4px]">950000</div>
                                        </div>
                                        <p className="name text-lg font-bold max-w-full text-ellipsis mt-4">Adilette Shower Slides</p>
                                    </article>
                                </div>
                            </SliderWithSlick>
                        </div>
                    </div>
                    <div className="links mt-20">
                        <ul className="list-none">
                            <li className="text-lg flex items-center">
                                <TbTruckReturn />
                                <span className="underline ml-3">Easy Returns</span>
                            </li>
                            <li className="text-lg flex items-center">
                                <FaShippingFast />
                                <span className="underline ml-3">FREE SHIPPING FOR ADICLUB MEMBERS</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-screen md:w-full md:grid-cols-[360px]">
                    <div className="checkout-btn w-full md:w-[360px] h-[50px]">
                        <Button title="checkout" link="/delivery" />
                    </div>
                    <div className="order-summary mt-16 mb-10 w-[450px] md:w-[360px]">
                        <h2 className="title text-3xl uppercase font-extrabold mb-10">orrder summary</h2>
                        <ul className="list-none pb-3 border-b">
                            <li className="flex justify-between items-center text-lg mb-1 font-medium">
                                <span>3 items</span>
                                <span>10,000,000</span>
                            </li>
                            <li className="flex justify-between items-center text-lg mb-1 font-medium">
                                <span>Original price</span>
                                <span>10,000,000</span>
                            </li>
                            <li className="flex justify-between items-center text-lg mb-1 font-medium">
                                <span>Delivery</span>
                                <span>Free</span>
                            </li>
                            <li className="flex justify-between items-center text-lg mb-1 font-medium">
                                <span>On sale</span>
                                <span>-700,000</span>
                            </li>
                            <li className="flex justify-between items-center text-lg mb-1 font-extrabold">
                                <span>Total</span>
                                <span>10,000,000</span>
                            </li>
                        </ul>
                        <div className="promo-code w-full h-[53px] mt-10">
                            <input className="w-full h-full text-black outline-0 border border-black text-lg pl-5" type="text" placeholder="Enter your promo code" />
                        </div>
                    </div>
                    <div className="payment-methods">
                        <h2 className="title uppercase text-lg font-bold mb-3">ACCEPTED PAYMENT METHODS</h2>
                        <div className="content w-[230px] h-[56px]">
                            <img className="w-full h-full object-cover" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/paymentmethodsvmp_VN_new_tcm212-713926.png" alt="METHOD PAYMENT" />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderOnlyLayout>
    )
}

export default Cart