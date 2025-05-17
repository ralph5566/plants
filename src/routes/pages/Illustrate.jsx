import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { AnimatePresence, motion } from 'framer-motion'

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
    const [num, setNum] = useState(screenW)

    useEffect(() => {
        const handleResize = () => {
            setNum(Math.floor(document.documentElement.clientWidth / 250))
        }
        // console.log('screen ' + num)
        window.addEventListener('resize', handleResize)

        // 初始化也執行一次（如果想保證一致性）
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                        slidesPerView={num}
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
                <AnimatePresence>
                    {plantNo && (
                        <main className="inline-flex max-lg:flex-col w-full justify-center my-28 max-lg:mt-20 max-md:mt-5 max-xl:mb-6 overflow-hidden">
                            {/* IMG_NO08_3.png */}
                            <div className="relative w-1/2 max-lg:w-full max-xl:my-auto">
                                {/* <div className="mx-auto w-2/3"></div> */}
                                <div className="relative p-52 py-96 max-lg:py-92 max-md:py-80 max-sm:py-64 max-ss:py-48">
                                    <motion.img
                                        key={plantNo.no}
                                        src={`/plants/img/IMG_NO${
                                            NO < 9 ? OOO + (NO + 1) : NO + 1
                                        }.png`}
                                        // src={plantNo.img}
                                        // src={`http://localhost:3000/${plantNo.img}`}
                                        className="w-2/3 absolute top-0 left-1/4 max-2xl:top-1/4 max-lg:top-0 max-lg:left-[15%] max-sss:left-0"
                                        alt={plantNo.name}
                                        initial={{
                                            opacity: 0,
                                            x: -300,
                                            rotate: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: [0, -5, 0],
                                            y: [0, -5, 0, 5, 0], // 上下輕晃
                                            rotate: [0, 2, -2, 1, 0], // 微幅搖晃
                                        }}
                                        transition={{
                                            opacity: { duration: 3 }, // 淡入
                                            y: {
                                                duration: 12,
                                                ease: 'easeInOut',
                                                repeat: Infinity,
                                            },
                                            rotate: {
                                                duration: 12,
                                                ease: 'easeInOut',
                                                repeat: Infinity,
                                            },
                                        }}
                                        exit={{ opacity: 0, x: 200 }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mx-auto my-auto px-12 max-lg:px-0 max-lg:mt-32 max-md:mt-5 items-start w-3/4">
                                <h1 className="flex text-left text-4xl leading-loose max-lg:text-center max-lg:mx-auto max-xl:text-2xl max-xl:leading-[3rem]">
                                    {plantNo.name}
                                    <br />
                                    {plantNo.genus} {plantNo.type}
                                </h1>

                                <h2 className="italic my-5 text-2xl leading-10 max-lg:mx-auto max-xl:text-xl max-xl:leading-10">
                                    &ldquo; {plantNo.title} &rdquo;
                                </h2>

                                <h3 className="mb-4">{plantNo.desc}</h3>
                                <h3 className="mb-8 mr-32 text-left max-xl:mr-0 max-lg:text-center max-lg:mr-0">
                                    {plantNo.character}
                                </h3>
                            </div>
                        </main>
                    )}
                </AnimatePresence>
            </Plants>
        </>
    )
}

export default Illustrate
