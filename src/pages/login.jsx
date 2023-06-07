import DefaultLayout from "../layouts/Default"
import { GrCheckmark } from "react-icons/gr"
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { useState } from "react"
import Button from "../components/Button"

const Login = () => {

    // fake data checkbox submit form
    const dataCheckBox = [
        { id: 1, content: "Yes, I am 18+ years old." },
        { id: 2, content: "I have read, understood and accepted the adidas Privacy Policy, the adiClub Terms and Conditions and Website Terms and Conditions." },
        { id: 3, content: "I hereby consent to the use of my personal data for marketing and promotional purposes as set out in the adidas Privacy Policy." },
        { id: 4, content: "I hereby consent to the transfer, sharing, use, collection and disclosure of my personal data to third parties as set out in the adidas Privacy Policy." },
        { id: 5, content: "Keep me logged in.Applies to all options." },
    ]
    const [inputEmail, setInputEmail] = useState('')
    const [checkboxState, setCheckboxState] = useState(new Array(dataCheckBox.length).fill(false))

    const handleOnchangeCheckbox = (checkboxUpdateIndex) => {
        const checkboxStateUpdate = checkboxState.map((item, index) =>
            index === checkboxUpdateIndex ? !item : item
        )
        setCheckboxState(checkboxStateUpdate)
    }

    // list data checked
    // const showResultCheckbox = () => {
    //     checkboxState.map((state, index) => {
    //         if (state) {
    //             console.log(index, dataCheckBox[index])
    //         }
    //     })
    // }



    return (
        <DefaultLayout>
            <div className="login-container pt-[50px] pb-[50px] pl-[30px] m-auto md:m-0 md:pl-[100px] pr-[30px] md:pr-[100px] grid  grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-3">
                <div className="col-1 hidden md:block">
                    <div className="img-box w-[483px] h-[230px]">
                        <img className="w-full h-full object-cover" src="https://www.adidas.com.vn/glass/react/a289262/assets/img/account-portal-page-inline.png" alt="ADIDAS" />
                    </div>
                    <div className="content-box grid grid-flow-row gap-5 text-lg mt-[50px]">
                        <h2 className="content-title uppercase text-4xl text-black font-bold">JOIN ADICLUB. GET REWARDED TODAY.</h2>
                        <p className="text-lg">
                            As an adiClub member you get rewarded with what you love for doing what you love.
                            Sign up today and receive immediate access to these Level 1 benefits:
                        </p>
                        <ul className="grid grid-flow-row gap-3">
                            <li className="flex items-center">
                                <span className="mr-3"><GrCheckmark /></span>
                                <span>Free delivery</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3"><GrCheckmark /></span>
                                <span>A 15% off voucher for your next purchase</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3"><GrCheckmark /></span>
                                <span>Access to Members Only products and sales</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3"><GrCheckmark /></span>
                                <span>Special offers and promotions</span>
                            </li>
                        </ul>
                        <p>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.</p>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <div className="img-box w-full md:w-[483px] h-[230px]">
                        <img className="w-full h-full object-cover" src="https://account-frontends.adidas.com/account_account-portal/1.0.0-experimental.14/assets/inline-top-image-desktop.42838d07.jpg" alt="ADIDAS" />
                    </div>
                    <div className="content-box grid grid-flow-row gap-5 text-lg mt-[50px]">
                        <h2 className="content-title uppercase text-4xl text-black font-bold">YOUR ADICLUB BENEFITS AWAIT</h2>
                        <p>Get free shipping, discount vouchers and members only products when you’re in adiClub.</p>
                        <p className="font-bold">Log in or sign up (it’s free)</p>
                        <ul className="flex">
                            <li className="mr-4 w-[55px] h-[50px] border border-black flex justify-center items-center text-xl">
                                <span><AiFillApple /></span>
                            </li>
                            <li className="mr-4 w-[55px] h-[50px] border border-black flex justify-center items-center text-xl">
                                <span><BsFacebook /></span>
                            </li>
                            <li className="mr-4 w-[55px] h-[50px] border border-black flex justify-center items-center text-xl">
                                <span><AiFillGoogleCircle /></span>
                            </li>
                        </ul>
                        <input type="text" className="w-[443px] h-[53px] outline-none pl-3 uppercase text-xl border border-black" placeholder="email address" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                        <div className="checkbox">
                            {dataCheckBox.map((item, index) => {
                                const { id, content } = item
                                return (
                                    <div key={id} className="input-checkbox-box flex items-center max-w-[400px]">
                                        <input className="mr-3 cursor-pointer" type="checkbox" id={id} checked={checkboxState[index]} onChange={() => handleOnchangeCheckbox(index)} />
                                        <span className="ml-3 text-lg">{content}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="button-submit-form w-full md:w-[153px] h-[50px]">
                            <Button title="continute" link="/" />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Login