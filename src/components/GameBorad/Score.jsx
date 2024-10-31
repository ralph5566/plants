const Score = ({ score, onStart }) => {
    let Img
    let cssClass = 'mx-auto'

    const hightScore = JSON.parse(localStorage.getItem('HightScore')).score
    if (score >= 90) {
        Img = './img/IMG_005.jpg'
        // Img = `http://localhost:3000/images/IMG_005.jpg`
        cssClass += ' w-1/2 max-md:w-5/6'
    } else if (score >= 60) {
        Img = './img/IMG_NO01.png'
        // Img = `http://localhost:3000/images/IMG_NO08_2.png`
        cssClass += ' w-1/4 max-md:w-4/5'
    } else if (score >= 20) {
        Img = './img/IMG_NO04.png'
        // Img = `http://localhost:3000/images/IMG_NO04.png`
        cssClass += ' w-1/4 max-md:w-4/5'
    } else if (score >= 0) {
        Img = './img/IMG_NO15.png'
        // Img = `http://localhost:3000/images/IMG_NO01.png`
        cssClass += ' w-1/5 max-md:w-4/5'
    }

    return (
        <>
            <img src={Img} alt="complete" className={cssClass} />
            <div className="my-10 max-md:my-10">
                <h2 className="text-2xl leading-10">
                    遊戲結束
                    <br />
                    你獲得了 {score} 分
                    <br />
                    最高得分為 {hightScore}
                </h2>

                <button
                    onClick={onStart}
                    className=" my-12 max-md:my-10 px-5 shadow-2m hover:shadow-3m hover:text-yy"
                >
                    重新開始遊戲
                </button>
            </div>
        </>
    )
}

export default Score
