import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

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

    let plantNo = plants[NO]

    function plantHandler(index, plantNo, event) {
        event.preventDefault()
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
                                    to={`/plants/${plant.no}`}
                                    className="mx-20"
                                    key={plant.no}
                                    onClick={() =>
                                        plantHandler(index, plant.no, event)
                                    }
                                >
                                    <img
                                        src={plant.img}
                                        // src={`http://localhost:3000/${plant.img}`}
                                        className="w-40 mx-20 my-0 max-md:mx-auto"
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
                    <div className=" relative w-1/2 max-md:w-full">
                        <img
                            src={plantNo.img}
                            // src={`http://localhost:3000/${plantNo.img}`}
                            className="mx-auto w-2/3"
                            alt={plantNo.name}
                        />
                    </div>

                    <div className="flex flex-col justify-center mx-auto my-auto px-12 max-md:px-0 items-start w-3/4">
                        <h3 className="flex text-left text-xl leading-loose">
                            {plantNo.name}
                            <br />
                            {plantNo.genus} {plantNo.type}
                        </h3>

                        <h1 className="italic my-5 text-2xl leading-loose">
                            &ldquo; {plantNo.title} &rdquo;
                        </h1>
                        <h3 className="mb-8">{plantNo.desc}</h3>
                    </div>
                </main>
            </Plants>
        </>
    )
}

export default Illustrate
