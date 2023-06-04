import { AiOutlineCloseSquare } from 'react-icons/ai'

import { HeaderProvider } from '../../context/HeaderContext'
import { useContext } from 'react'


const HeaderEventDetail = ({ data }) => {

    const { setShowEventDetail } = useContext(HeaderProvider)

    return (
        <div className="header-event-detail-modal absolute top-0 left-0 right-0 bottom-0 bg-modal">
            <div className="header-event-detail-content w-full min-h-[260px] bg-white p-7 flex absolute left-0 right-0 animate-toBottom">
                <div className="content-1 basis-[40%] flex justify-center items-center">Nội dung 1</div>
                <div className="content-2 basis-[40%] flex justify-center items-center">Nội dung 2</div>
                <div className="close basis-[20%] flex justify-center items-center relative">
                    <div className="icon-close text-4xl absolute top-[6%] right-[6%] cursor-pointer" onClick={() => setShowEventDetail(false)}>
                        <AiOutlineCloseSquare />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderEventDetail