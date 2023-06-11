import DefaultLayout from "../layouts/Default"
import Button from "../components/Button"
import SliderWithSlick from "../components/Slider"
import ProductCard from "../components/ProductCard"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import handleNavigate from "../utils/handleNavigate"
import { settingProductHome, settingTagListHome, settingTeaserHome, settingShoppingForHome } from "../utils/settingSlider"

const Home = () => {

    const navigate = useNavigate()

    //fake data tablist 
    const data = [
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
    ]
    const [tagSelected, setTagSelected] = useState({ tagName: 'New Arrivals', url: '/new-arrivals' })
    const [dataTagList, setDataTagList] = useState(data)

    const handleSetTagSelected = (tagName, url) => {
        setTagSelected({
            tagName,
            url
        })
    }


    return (
        <DefaultLayout>
            <div className="homepage-box">
                <section className="hero-1 w-screen md:w-full h-[561px] bg-home-hero-1 bg-center bg-cover bg-no-repeat relative">
                    <div className="content absolute left-3 top-[50%] translate-y-[-50%] grid grid-flow-row gap-4">
                        <h2 className="text-5xl text-white font-bold">move for the planet</h2>
                        <p className="text-lg text-white">Join now on the adidas Running app and move for the places we play.</p>
                        <div className="btn-1 w-[150px] h-[50px]">
                            <Button title="join now" link="/challenge" white />
                        </div>
                        <div className="btn-2 w-[198px] h-[50px]">
                            <Button title="find out more" link="/challenge" white />
                        </div>
                    </div>
                </section>
                <section className="hero-2 w-screen md:w-full h-[561px] bg-home-hero-2 bg-center bg-cover bg-no-repeat relative">
                    <div className="content absolute left-3 top-[50%] translate-y-[-50%] grid grid-flow-row gap-4">
                        <h2 className="text-5xl text-white font-bold uppercase">PUSH TO NEW STRENGTHS</h2>
                        <p className="text-lg text-white">A durable collection that keeps you focused.</p>
                        <div className="btn-1 w-[150px] h-[50px]">
                            <Button title="shop now" link="/shop" white />
                        </div>
                    </div>
                </section>
                <section className="taglist w-full">
                    <div className="tag w-full h-[120px] pl-5 pr-5 flex items-center justify-between">
                        <ul className="flex-1 text-3xl text-black font-bold overflow-hidden">
                            <SliderWithSlick setting={settingTagListHome}>
                                <li className={`mr-8 last:mr-0 cursor-pointer ${tagSelected.tagName === 'New Arrivals' ? 'underline' : 'text-textColor2 no-underline'}`} onClick={() => handleSetTagSelected('New Arrivals', '/new-arrivals')}>New Arrivals</li>
                                <li className={`mr-8 last:mr-0 cursor-pointer ${tagSelected.tagName === 'Best of adidas' ? 'underline' : 'text-textColor2 no-underline'}`} onClick={() => handleSetTagSelected('Best of adidas', '/best-of-adidas')}>Best of adidas</li>
                                <li className={`mr-8 last:mr-0 cursor-pointer ${tagSelected.tagName === 'adiclub' ? 'underline' : 'text-textColor2 no-underline'}`} onClick={() => handleSetTagSelected('adiclub', '/adiclub')}>AdiClub</li>
                                <li className={`mr-8 last:mr-0 cursor-pointer ${tagSelected.tagName === 'New Collection' ? 'underline' : 'text-textColor2 no-underline'}`} onClick={() => handleSetTagSelected('New collection', '/new-collection')}>New collection</li>
                            </SliderWithSlick>
                        </ul>
                        <span className="text-xl uppercase text-black font-bold underline cursor-pointer" onClick={() => handleNavigate(navigate, `/${tagSelected}`)}>view all</span>
                    </div>
                    <div className="slider-product w-full overflow-hidden">
                        <SliderWithSlick setting={settingProductHome}>
                            {dataTagList.map(item => {
                                return (
                                    <ProductCard key={item.id} data={item} teaser />
                                )
                            })}
                        </SliderWithSlick>
                    </div>
                </section>
                <section className="teaser mt-10 mb-10 pl-3 pr-3 overflow-hidden">
                    <h2 className="title uppercase text-5xl font-bold mb-5">what's hot</h2>
                    <SliderWithSlick setting={settingTeaserHome}>
                        <div className="teaser-item">
                            <div className="img-box w-[298px] h-[398px]">
                                <video className="w-full h-full" loop autoPlay playsInline src="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto,c_scale,w_0.5/enVN/Images/lets-slide-tcc_tcm212-1024112.mp4"></video>
                            </div>
                            <div className="grid grid-flow-row gap-3 mt-3">
                                <p className="name text-2xl font-bold text-black">Let it slide</p>
                                <span className="sub-title">Perfect for the pool or everywhere else.​</span>
                                <p className="uppercase underline text-lg font-bold">shop now</p>
                            </div>
                        </div>
                        <div className="teaser-item">
                            <div className="img-box w-[298px] h-[398px]">
                                <video className="w-full h-full" loop autoPlay playsInline src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/Disney/mickey/update/horizontal-FW23-disney-mickey-global-launch-hp-teaser-carousel-gif-d.mp4"></video>
                            </div>
                            <div className="grid grid-flow-row gap-3 mt-3">
                                <p className="name text-2xl font-bold text-black">Let it slide</p>
                                <span className="sub-title">Perfect for the pool or everywhere else.​</span>
                                <p className="uppercase underline text-lg font-bold">shop now</p>
                            </div>
                        </div>
                        <div className="teaser-item">
                            <div className="img-box w-[298px] h-[398px]">
                                <video className="w-full h-full" loop autoPlay playsInline src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/Lego%20fw23/updated/horizontal-FW23-lego-q3-launch-kids-hp-teaser-carousel-portrait-gif-m.mp4"></video>
                            </div>
                            <div className="grid grid-flow-row gap-3 mt-3">
                                <p className="name text-2xl font-bold text-black">Let it slide</p>
                                <span className="sub-title">Perfect for the pool or everywhere else.​</span>
                                <p className="uppercase underline text-lg font-bold">shop now</p>
                            </div>
                        </div>
                        <div className="teaser-item">
                            <div className="img-box w-[298px] h-[398px]">
                                <img className="w-full h-full object-cover" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/football-ss23-arsenal-home-onsite-tcc_tcm212-1023874.jpg" alt="ADIDAS" />
                            </div>
                            <div className="grid grid-flow-row gap-3 mt-3">
                                <p className="name text-2xl font-bold text-black">Let it slide</p>
                                <span className="sub-title">Perfect for the pool or everywhere else.​</span>
                                <p className="uppercase underline text-lg font-bold">shop now</p>
                            </div>
                        </div>
                    </SliderWithSlick>
                </section>
                <section className="shopping-for mt-10 mb-10 pl-3 pr-3">
                    <h2 className="title uppercase text-5xl font-bold mb-5">who are you shopping for</h2>
                    <div className="content w-full h-auto overflow-hidden">
                        <SliderWithSlick setting={settingShoppingForHome}>
                            <div className="content-item">
                                <div className="img w-[398px] h-[448px]">
                                    <img className="w-full h-full object-cover" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-women-d_tcm212-819363.jpg" alt="ADIDAS" />
                                </div>
                                <p className="name text-3xl text-black uppercase font-bold mt-5">Women</p>
                            </div>
                            <div className="content-item">
                                <div className="img w-[398px] h-[448px]">
                                    <img className="w-full h-full object-cover" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-men-d_tcm212-819364.jpg" alt="ADIDAS" />
                                </div>
                                <p className="name text-3xl text-black uppercase font-bold mt-5">Men</p>
                            </div>
                            <div className="content-item">
                                <div className="img w-[398px] h-[448px]">
                                    <img className="w-full h-full object-cover" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-kids-d_tcm212-819367.jpg" alt="ADIDAS" />
                                </div>
                                <p className="name text-3xl text-black uppercase font-bold mt-5">Kids</p>
                            </div>
                        </SliderWithSlick>
                    </div>
                </section>
                <section className="stories pt-[50px] pb-[50px] pl-2 pr-2 grid grid-flow-row gap-10 md:grid-flow-col md:grid-cols-2 md:gap-4 bg-newYellow">
                    <div className="col-1 pl-6 pr-4 text-justify grid grid-flow-row gap-7">
                        <h3 className="text-3xl md:text-5xl font-bold text-black  min-h-[70px]">STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h3>
                        <p className="text-lg md:text-xl">
                            Sport keeps us fit. Keeps you mindful. Brings us together.
                            Through sport we have the power to change lives. Whether it is through stories of inspiring athletes.
                            Helping you to get up and get moving. Sportswear featuring the latest technologies,
                            to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player,
                            the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city.
                            The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene.
                            On stage, at festivals. Our sports clothing keeps you focused before that whistle blows.
                            During the race. And at the finish lines. We’re here to supportcreators. Improve their game.
                            Their lives. And change the world.
                        </p>
                        <p className="text-lg md:text-xl">
                            adidas is about more than sportswear and workout clothes.
                            We partner with the best in the industry to co-create.
                            This way we offer our fans the sports apparel and style that match their athletic needs,
                            while keeping sustainability in mind. We’re here to support creators. Improve their game.
                            Create change. And we think about the impact we have on our world.
                        </p>
                    </div>
                    <div className="col-2 pl-6 pr-4 text-justify grid grid-flow-row gap-7">
                        <h3 className="text-3xl md:text-5xl font-bold text-black min-h-[70px]">Workout clothes, for any sport</h3>
                        <p className="text-lg md:text-xl">
                            adidas designs for and with athletes of all kinds. Creators, who love to change the game.
                            Challenge conventions. Break the rules and define new ones.
                            Then break them again. We supply teams and individuals with athletic clothing pre-match.
                            To stay focussed. We design sports apparel that get you to the finish line. To win the match.
                            We support women, with bras and tights made for purpose. From low to high support. Maximum comfort.
                            We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool.
                            Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits.
                            Classic sports models are brought back to life. Like Stan Smith. And Superstar.
                            Now seen on the streets and the stages.
                        </p>
                        <p className="text-lg md:text-xl">
                            adidas is about more than sportswear and workout clothes.
                            We partner with the best in the industry to co-create.
                            This way we offer our fans the sports apparel and style that match their athletic needs,
                            while keeping sustainability in mind. We’re here to support creators. Improve their game.
                            Create change. And we think about the impact we have on our world.
                        </p>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    )
}

export default Home