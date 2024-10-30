import { useState } from 'react'
import SpecialDetail from '../../components/Special/SpecailDetail'

const Special = () => {
    const [showModal, setShowModal] = useState(false)
    const [imgNo, setImgNo] = useState('')

    const specialImg = [
        { img: './img/IMG_MO01.jpg', name: '大花咸豐草' },
        { img: './img/IMG_MO02.jpg', name: '巴西水竹草' },
        { img: './img/IMG_MO04.jpg', name: '水芙蓉' },
        { img: './img/IMG_MO12.jpg', name: '日本菟絲子' },
        { img: './img/IMG_MO10.jpg', name: '銀膠菊' },
        { img: './img/IMG_MO03.jpg', name: '小花蔓澤蘭' },
        { img: './img/IMG_MO07.jpg', name: '馬纓丹' },
        { img: './img/IMG_MO05.jpg', name: '布袋蓮' },
        { img: './img/IMG_MO06.jpg', name: '互花米草' },
        { img: './img/IMG_MO09.jpg', name: '美洲含羞草' },
        { img: './img/IMG_MO11.jpg', name: '銀合歡' },
        { img: './img/IMG_MO08.jpg', name: '豬草' },
    ]

    // const specialImg = [
    //     {
    //         img: 'http://localhost:3000/images/IMG_MO01.jpg',
    //         name: '大花咸豐草',
    //     },
    //     {
    //         img: 'http://localhost:3000/images/IMG_MO02.jpg',
    //         name: '巴西水竹草',
    //     },
    //     { img: 'http://localhost:3000/images/IMG_MO04.jpg', name: '水芙蓉' },
    //     {
    //         img: 'http://localhost:3000/images/IMG_MO12.jpg',
    //         name: '日本菟絲子',
    //     },
    //     { img: 'http://localhost:3000/images/IMG_MO10.jpg', name: '銀膠菊' },
    //     {
    //         img: 'http://localhost:3000/images/IMG_MO03.jpg',
    //         name: '小花蔓澤蘭',
    //     },
    //     { img: 'http://localhost:3000/images/IMG_MO07.jpg', name: '馬纓丹' },
    //     { img: 'http://localhost:3000/images/IMG_MO05.jpg', name: '布袋蓮' },
    //     { img: 'http://localhost:3000/images/IMG_MO06.jpg', name: '互花米草' },
    //     {
    //         img: 'http://localhost:3000/images/IMG_MO09.jpg',
    //         name: '美洲含羞草',
    //     },
    //     { img: 'http://localhost:3000/images/IMG_MO11.jpg', name: '銀合歡' },
    //     { img: 'http://localhost:3000/images/IMG_MO08.jpg', name: '豬草' },
    // ]

    function showModalHandler(no) {
        setShowModal(() => !showModal)
        setImgNo(no)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center my-20 mx-10">
                {specialImg.map((kk, index) => {
                    return (
                        <button
                            key={index}
                            className="hover:text-yy"
                            onClick={() => showModalHandler(index)}
                        >
                            <div className="p-12 m-10 bg-content-bgc rounded-xl shadow-2m hover:shadow-3m ">
                                <img
                                    id="FB"
                                    src={kk.img}
                                    className="w-52 hover:text-yy"
                                />
                            </div>
                            <h1 className="text-xl mb-5 hover:text-yy">
                                {kk.name}
                            </h1>
                        </button>
                    )
                })}
            </div>

            {showModal && (
                <SpecialDetail
                    onShow={showModalHandler}
                    showModal={showModal}
                    img={specialImg[imgNo].img}
                />
            )}
        </>
    )
}

export default Special
