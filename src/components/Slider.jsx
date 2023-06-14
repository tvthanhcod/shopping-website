import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWithSlick = ({ children, setting }) => {
    return (
        <div className="slider-box w-full ">
            <Slider {...setting}>
                {children}
            </Slider>
        </div>
    )
}

export default SliderWithSlick