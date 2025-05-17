import { useState, useEffect } from 'react'
import Modal from '../../components/Modal/Modal'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [showVideo, setShowVideo] = useState(false)
    const [showImg, setShowImg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowImg(window.scrollY > 150)
        }

        // window.addEventListener('scroll', () => {
        //     document.querySelector('.illustrate').classList.add('.showImg')
        // })
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const cssCss =
        'fixed w-1/6 top-20 max-lg:top-64 left-5 max-sm:hidden hover:rotate-2 duration-700'
    const cssCss2 =
        'fixed ml-auto mt-auto w-1/5 bottom-12 right-0 max-sm:hidden hover:rotate-6 duration-700'

    function showVideoHandler() {
        setShowVideo(() => !showVideo)
    }
    return (
        <>
            <div className="my-28 mx-auto w-[60%] overflow-hidden relative">
                <h1 className="text-3xl text-yy">關 於 我 們</h1>
                <p className="mt-5 ">
                    我們是來自中原大學商業設計系的禁植入侵
                    <br />
                    這個主題最初是受綠鬣蜥氾濫的新聞啟發，因此決定了外來種主題
                    <br />
                    但相比起會動的動物，腳下安靜的植物更容易被人們所忽略，造成的影響同樣不容小覷
                    <br />
                    因此想讓更多人了解他們所帶來的威脅與知識
                </p>

                <h1 className="text-3xl mt-20 leading-[3.5rem] text-yy">
                    什麼是外來入侵種？
                </h1>
                <div className=" mt-5 z-20 mb-20">
                    隨著全球化發展，人類有意或無意地引進了許多外來物種
                    <br />
                    其中一部分在新環境中快速擴散、難以控制，並對當地造成嚴重影響，這些就被稱為「外來入侵種」
                    <div className="my-[30px]">
                        <div className="text-2xl mb-10">
                            牠們帶來的危害主要有兩類：
                        </div>
                        一是對人類的衝擊，例如農業損失、經濟損害，甚至健康風險
                        <br />
                        二是對生態的威脅，可能排擠或淘汰原生物種，破壞整體生態平衡
                    </div>
                </div>

                <a
                    src="https://www.youtube.com/embed/GHFDb82kW8Q?si=Hrbh_kdNxkCDBqjH&amp;controls=0"
                    onClick={showVideoHandler}
                    className="relative cursor-pointer "
                >
                    <img
                        src="plants/img/IMG_003.JPG"
                        // src="http://localhost:3000/images/IMG_003.JPG"
                        alt="03"
                        className="relative w-full h-[90%] hover:scale-105 duration-500"
                    />
                    <img
                        src="/plants/img/IMG_play.png"
                        // src="http://localhost:3000/images/IMG_play.png"
                        className="z-10 absolute top-[40%] right-[86%] w-1/4 hover:scale-105 duration-500"
                    />
                </a>

                <h1 className="text-3xl mt-20 leading-[3.5rem] text-yy">
                    天反時為災 。 地反物為妖
                </h1>
                <p className="mt-5 z-20">
                    將違背自然節律、失控蔓延的草木與生物，視為妖異之物，正是體現人們對未知世界的投射與恐懼
                    <br />
                    當外來種佔據原生棲地、擾亂自然秩序，它們不再只是植物或動物，而是化身為生態中的妖怪
                    <br />
                    然而，妖由無知而生，唯有知識能破迷霧，透過理解與教育，認識這些入侵者的真面目
                    <br />
                    識破其弱點，才能真正「降妖除魔」，守護我們的自然家園
                </p>
                <AnimatePresence>
                    {showImg && (
                        <>
                            <motion.img
                                key="img1"
                                className={cssCss}
                                src="/plants/img/IMG_NO01.png"
                                alt="02"
                                initial={{ opacity: 0, x: -200, rotate: 10 }}
                                animate={{
                                    x: [0, -10, 0],
                                    y: [0, -20, 0], // 漂浮動畫
                                    opacity: 1,
                                    rotate: [0, -10, 0, 10, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.3 }, // 淡入
                                    y: {
                                        duration: 3,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                    },

                                    rotate: {
                                        duration: 5,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                    },
                                }}
                                exit={{ opacity: 0, x: 200 }}
                            />
                            <motion.img
                                key="img2"
                                className={cssCss2}
                                src="/plants/img/IMG_NO08_3.png"
                                alt="02"
                                initial={{ opacity: 0, x: 200, rotate: 5 }}
                                animate={{
                                    x: [0, -10, 0],
                                    y: [0, -20, 0], // 漂浮動畫
                                    opacity: 1,
                                    rotate: [0, -2, 0, 5, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.3 }, // 淡入
                                    y: {
                                        duration: 3,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                    },

                                    rotate: {
                                        duration: 5,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                    },
                                }}
                                exit={{ opacity: 0, x: -200 }}
                            />
                        </>
                    )}
                </AnimatePresence>

                {/* <img
                    className={cssCss}
                    src="http://localhost:3000/images/IMG_NO08_3.png"
                    alt="02"
                /> */}
            </div>

            {showVideo && (
                <Modal open={showVideo}>
                    <button
                        className=" absolute w-10 h-10 top-5 right-4 t text-4xl"
                        onClick={showVideoHandler}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <iframe
                        // width="560"
                        // height="315"
                        // frameborder="0"
                        // allowFullScreen
                        // referrerpolicy="strict-origin-when-cross-origin"
                        src="https://www.youtube.com/embed/GHFDb82kW8Q?rel=0&hd=1&vq=hd720?si=Hrbh_kdNxkCDBqjH&amp;controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className="mx-auto my-10 h-auto w-full"
                    ></iframe>
                </Modal>
            )}
        </>
    )
}

export default About
