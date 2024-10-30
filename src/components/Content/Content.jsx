import Gallery from './Gallery'
import ContentSwiper from './Swiper'

const Content = () => {
    return (
        <>
            <ContentSwiper />

            <div className="mx-auto">
                <h1 className="text-4xl mt-20 mb-5 mx-8 leading-[3.5rem] hover:text-yy">
                    天 反 時 為 災 。 地 反 物 為 妖
                </h1>
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
