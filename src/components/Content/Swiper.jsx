// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    // Scrollbar,
    A11y,
    Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

function ContentSwiper() {
    const kk = 'flex justify-center w-full overflow-hidden'
    const max =
        'flex w-full mt-0 max-md:mt-0 overflow-hidden h-[980px] max-2xl:h-[800px] max-xl:h-[600px] max-lg:h-[500px] max-md:h-[400px] max-sm:h-[280px] max-ss:h-[200px]'

    return (
        <>
            <Swiper
                className={max}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <img
                        alt="01"
                        src="/img/IMG_001.jpg"
                        // src={`http://localhost:3000/images/IMG_001.jpg`}
                        className="flex justify-center items-center w-full overflow-hidden"
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img
                        alt="02"
                        src="/img/IMG_002.jpg"
                        // src={`http://localhost:3000/images/IMG_002.jpg`}
                        className={kk}
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="bottom-24 max-lg:bottom-0">
                    <img
                        alt="03"
                        src="/img/IMG_003.JPG"
                        // src={`http://localhost:3000/images/IMG_003.JPG`}
                        className={kk}
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="bottom-14 max-lg:bottom-0">
                    <img
                        alt="04"
                        src="/img/IMG_004.jpg"
                        // src={`http://localhost:3000/images/IMG_004.jpg`}
                        className={kk}
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="bottom-0">
                    <img
                        alt="06"
                        src="/img/IMG_006.jpg"
                        // src={`http://localhost:3000/images/IMG_006.jpg`}
                        className={kk}
                    ></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ContentSwiper
