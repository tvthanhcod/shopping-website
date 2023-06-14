import React, { useEffect, useState, useRef } from 'react'
import DefaultLayout from "../layouts/Default"
import Button from "../components/Button"
import SliderWithSlick from "../components/Slider"
import { settingProductHome, settingTagListHome, settingTeaserHome, settingShoppingForHome } from "../utils/settingSlider"
import ProductCard from "../components/ProductCard"


const Detail = () => {

    const boxRightRef = useRef()

    //fake data tablist 
    const data = [
        { id: 1, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 2, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 3, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 4, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 5, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
        { id: 6, avatar: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg", name: "Rivalry Low Shoes", category: "Men Originals", price: "2000000", state: "Early access" },
    ]
    const [tagSelected, setTagSelected] = useState({ tagName: 'New Arrivals', url: '/new-arrivals' })
    const [dataTagList, setDataTagList] = useState(data)

    //xử lý sự kiện scroll view
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 2000) {
                boxRightRef.current.style.position = 'relative';
                console.log('Vượt quá 100px');
            } else {
                boxRightRef.current.style.position = 'fixed';
                // boxRightRef.current.style.top = '-100px';

            }

            // setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <DefaultLayout>
            <div class="homepage-box">
                <div class="grid grid-cols-3  relative">
                    <div class="col-span-2">
                        <div>
                            <div className='flex row'>
                                <img className='w-[410px] h-[410px]' src='https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg' />
                                <img className='w-[410px] h-[410px] ml-1' src='https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg' />
                            </div>
                            <div className='flex row mt-1'>
                                <img className='w-[410px] h-[410px]' src='https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg' />
                                <img className='w-[410px] h-[410px] ml-1' src='https://assets.adidas.com/images/w_600,f_auto,q_auto/3315f665bfff4ba88a81aaaa01678cfb_9366/Rivalry_Low_Shoes_White_FV4225_01_standard.jpg' />
                            </div>

                            {/* Khai báo mô tả */}
                            <div className='flex justify-center mt-10'>
                                <div className='text-2xl mt-2 border-t-2 w-[90%] pt-5 pb-5 border-b-2 border-black-200 p-2 px-8 flex justify-between'>
                                    <button >
                                        Mô tả
                                    </button>
                                    <button >
                                        .
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='text-2xl mt-2  w-[90%] border-b-2 pt-5 pb-5  border-black-600 p-2 px-8 flex justify-between'>
                                    <button >
                                        Thông tin chi tiết
                                    </button>
                                    <button >
                                        .
                                    </button>
                                </div>
                            </div>

                            {/* YOU MAY ALSO LIKE */}
                            <div>
                                <div className='text-4xl mt-10 text-bold'>
                                    YOU MAY ALSO LIKE
                                </div>
                                <div className="slider-product w-[95%] overflow-hidden">
                                    <SliderWithSlick setting={settingProductHome} >
                                        {dataTagList.map(item => {
                                            return (
                                                <ProductCard key={item.id} data={item} teaser />
                                            )
                                        })}
                                    </SliderWithSlick>
                                    <div className='flex justify-center'>
                                        <div className='text-3xl mt-20  w-[90%] border-b-2 border-t-2 pt-5 pb-5  border-black-600 p-2 px-8 flex justify-between'>
                                            <button >
                                                Đánh giá (179)
                                            </button>
                                            <button >
                                                .
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* YOU MAY ALSO LIKE */}
                                <div>
                                    <div className='text-4xl mt-20 text-bold mb-7 '>
                                        OTHERS ALSO BOUGHT
                                    </div>
                                    <div className="slider-product w-[95%] overflow-hidden">
                                        <SliderWithSlick setting={settingProductHome} >
                                            {dataTagList.map(item => {
                                                return (
                                                    <ProductCard key={item.id} data={item} teaser />
                                                )
                                            })}
                                        </SliderWithSlick>
                                        <div className='flex justify-center'>
                                            <div className='text-2xl mt-20  w-[90%] border-b-2 border-t-2 pt-5 pb-5  border-black-600 p-2 px-8 flex justify-between'>
                                                <button >
                                                    SẢN PHẨM XEM GẦN ĐÂY
                                                </button>
                                                <button >
                                                    .
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 relative bg-white " >
                        {/* <div class="absolute inset-0"> */}
                        <div class="flex-1 fixed" ref={boxRightRef}>
                            <div>
                                <div className="text-2xl mt-10">
                                    Nam • Originals
                                </div>
                                <div className='text-5xl mt-4 font-bold'>
                                    DÉP ADILETTE 22
                                </div>
                                <div className='text-lg mt-4 font-bold'>
                                    1.400.000₫
                                </div>
                                <div className='text-lg mt-5 mb-4' >
                                    Crystal White / Crystal White / Core Black
                                </div>
                                <div className='text-lg mt-5 mb-4 font-bold'>
                                    Kích cỡ
                                </div>
                                <div className='flex row'>
                                    <button className='border-solid border-2 border-black-300 p-2 px-8'> 8UK </button>
                                    <button className='border-solid border-2 border-black-300 p-2 px-8'> 8UK </button>
                                    <button className='border-solid border-2 border-black-300 p-2 px-8'> 8UK </button>
                                    <button className='border-solid border-2 border-black-300 p-2 px-8'> 8UK </button>
                                </div>
                                <div className='text-2xl mt-4 font-bold'>
                                    Hướng dẫn chọn kich cỡ
                                </div>
                                <div>
                                    <div className='flex row'>
                                        <div >
                                            <Button title="Thêm vào giỏ hàng" link="/card" black className="pt-10 ml-10 w-[300px]" />
                                        </div>
                                        <div className='text-2xl ml-5 mt-2 border-solid border-2 border-black-300 p-2 px-8  text-black'>
                                            aa
                                        </div>
                                    </div>
                                    {/* <div className='text-2xl mt-2 border-solid border-2 border-black-300 p-2 px-8'>
                                            Tìm mẫu tương tự
                                        </div> */}
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Detail