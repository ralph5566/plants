import Gallery from './Gallery'
import ContentSwiper from './Swiper'

const Content = () => {
    return (
        <>
            <ContentSwiper />

            <div className="mx-auto">
                <h1 className="text-4xl mt-20 mb-5 mx-8 leading-[3.5rem] max-md:text-xl max-md:mx-6 text-yy">
                    天 反 時 為 災 。 地 反 物 為 妖
                </h1>
                <h2 className="px-40 mt-12 max-md:px-10">
                    來自遙遠異地的植物們，漂洋過海來到福爾摩沙，最初如沉默的旅人，卻在吸收大地養分後，化為擁有破壞之力的妖怪
                    <br />
                    他們奪走陽光與土壤，築起自己的王國，讓原本和諧的生態逐漸崩潰
                    <br />
                    然而，他們並非無懈可擊，只要看清他們的真面目，識破他們的弱點，便可以打倒他們，守住我們的家園
                </h2>
            </div>

            <Gallery />
        </>
    )
}

export default Content

// export async function Loader() {
//     const response = await fetch('http://localhost:3000/plants')
//     const resData = await response.json()
//     return resData.plants
// }
