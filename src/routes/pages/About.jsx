import { useState } from 'react'
import Modal from '../../components/Modal/Modal'

const About = () => {
    const [showVideo, setShowVideo] = useState(false)
    const cssCss =
        'fixed ml-auto mt-auto w-1/5 bottom-20 right-0 max-sm:hidden hover:rotate-6 duration-300'

    function showVideoHandler() {
        setShowVideo(() => !showVideo)
    }
    return (
        <>
            <div className="my-28 mx-auto w-[60%] overflow-hidden ">
                <h1 className="text-3xl  ">關 於 我 們</h1>
                <p className="mt-5 ">
                    最初是我們受綠鬣蜥氾濫的新聞啟發，但相比起會動的動物，腳下的植物更容易被人們所忽略，造成的影響同樣不容小覷，因次想讓更多人了解他們所帶來的威脅與知識
                </p>

                <h1 className="text-3xl mt-20">外 來 入 侵 種</h1>
                <p className=" mt-5 z-20 mb-20">
                    隨著全球化的發展,有意或無意引進的外來物種越來越常見，其中一些造成負面影響即為「外來入侵種」
                    <br />
                    主要造成兩種負面影響，其一是對人類的影響，造成經濟損失或健康威脅。其二是對生態威脅，本土物種會被驅離或是淘汰，並造成生態災害
                </p>

                <a
                    src="https://www.youtube.com/embed/GHFDb82kW8Q?si=Hrbh_kdNxkCDBqjH&amp;controls=0"
                    onClick={showVideoHandler}
                    className="relative cursor-pointer"
                >
                    <img
                        src="plants/img/IMG_003.JPG"
                        // src="http://localhost:3000/images/IMG_003.JPG"
                        alt="03"
                        className=" relative w-full h-[100%] hover:scale-105 duration-300"
                    />
                    <img
                        src="plants/img/IMG_play.png"
                        // src="http://localhost:3000/images/IMG_play.png"
                        className="z-10 absolute top-[40%] right-[86%] w-1/4 hover:scale-105"
                    />
                </a>

                <h1 className="text-3xl mt-20 leading-[3.5rem]">
                    天反時為災 。 地反物為妖
                </h1>
                <p className="mt-5 z-20">
                    妖怪皆由草木或動物等轉變的，也是怪異或反常的事物的集合，源於人們對未知的恐懼與不解
                    <br />
                    透過認識與教育，了解並認識他們，揭開真面目，降妖除魔
                </p>

                <img
                    className={cssCss}
                    src="plants/img/IMG_NO08_3.png"
                    alt="02"
                />
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
                        X
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
