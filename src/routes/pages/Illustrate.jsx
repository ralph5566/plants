import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Plants from '../../components/Plants/Plants'
import { useDispatch, useSelector } from 'react-redux'
import PLANTS from '../../../public/plants'

import { plantNoActions } from '../../redux/PlantNo'

function Illustrate() {
    const screenW = Math.floor(document.documentElement.clientWidth / 250)

    const plantsNo = useSelector((state) => state.plantNo.no)
    const dispatch = useDispatch()
    const params = useParams()

    const plants = PLANTS

    console.log(plantsNo)
    console.log(params.plantNo)

    const initialPlant =
        params.plantNo !== undefined ? params.plantNo : plantsNo
    const NO = plants.findIndex((plant) => {
        return plant.no === initialPlant
    })

    console.log(NO)
    let OO = 0
    let OOO = OO.toString()

    let plantNo = plants[NO]

    function plantHandler(index, plantNo, event) {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        dispatch(plantNoActions.setNo(plantNo))
    }

    return (
        <>
            <Plants
                buttons={
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={screenW}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {plants.map((plant, index) => (
                            <SwiperSlide key={plant.no}>
                                <Link
                                    to={`/illustrate/${plant.no}`}
                                    className="mx-20"
                                    key={plant.no}
                                    onClick={() =>
                                        plantHandler(index, plant.no, event)
                                    }
                                >
                                    <img
                                        src={plant.img}
                                        // src={`http://localhost:3000/${plant.img}`}
                                        className="w-40 mx-20 my-0 max-md:mx-auto hover:scale-[1.1] hover:rotate-2 duration-500"
                                        alt={plant.name}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            >
                {plants.length === 0 && (
                    <>
                        <h2>獲取失敗</h2>
                    </>
                )}

                <main className="inline-flex max-md:flex-col w-full justify-center my-28 max-lg:mt-20 max-md:mt-5 max-xl:mb-6 ">
                    {/* IMG_NO08_3.png */}
                    <div className=" relative w-1/2 max-md:w-full max-xl:my-auto">
                        <img
                            src={`/plants/img/IMG_NO${
                                NO < 9 ? OOO + (NO + 1) : NO + 1
                            }.png`}
                            // src={plantNo.img}
                            // src={`http://localhost:3000/${plantNo.img}`}
                            className="illustrate mx-auto w-2/3"
                            alt={plantNo.name}
                        />
                    </div>
                    <div className="flex flex-col justify-center mx-auto my-auto px-12 max-md:px-0 items-start w-3/4">
                        <h1 className="flex text-left text-4xl leading-loose max-md:text-center max-md:mx-auto max-xl:text-2xl max-xl:leading-[3rem]">
                            {plantNo.name}
                            <br />
                            {plantNo.genus} {plantNo.type}
                        </h1>

                        <h2 className="italic my-5 text-2xl leading-10 max-md:mx-auto max-xl:text-xl max-xl:leading-10">
                            &ldquo; {plantNo.title} &rdquo;
                        </h2>

                        <h3 className="mb-4">{plantNo.desc}</h3>
                        <h3 className="mb-8 mr-32 text-left max-xl:mr-0 max-md:text-center max-md:mr-0">
                            {plantNo.character}
                        </h3>
                    </div>
                </main>
            </Plants>
        </>
    )
}

export default Illustrate
