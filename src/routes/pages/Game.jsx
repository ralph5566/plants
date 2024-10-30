// import { json } from 'react-router-dom'
import GameBoard from '../../components/GameBorad/GameBoard'
import { useState } from 'react'
import questions from '../../../public/questions'

const Game = () => {
    const [startGame, setStartGame] = useState(false)

    // const post = useLoaderData()
    const post = questions
    const shuffledQuestions = post.sort(() => Math.random() - 0.5)
    console.log(shuffledQuestions.map((q) => q.no))

    function startGameHandler() {
        setStartGame(() => !startGame)
    }

    return (
        <>
            <menu className="my-0 p-0 w-full ">
                {!startGame && (
                    <>
                        <div className="bg-game-start bg-contain bg-fixed bg-no-repeat bg-center h-screen max-ss:h-4/5">
                            <div className="flex flex-col h-full bg-bgcB">
                                <img
                                    alt="logo"
                                    src="/img/IMG_logo03.png"
                                    // src={`http://localhost:3000/images/IMG_logo03.png`}
                                    className="w-1/6 mt-48 mx-auto max-md:w-1/2 max-sss:mt-10"
                                />
                                <h1 className="mt-5 text-3xl font-[900] text-yy">
                                    問 答 遊 戲
                                </h1>
                                <button
                                    onClick={startGameHandler}
                                    className="mt-20 max-ss:my-20 w-1/3 z-10 px-3 mx-auto shadow-2m hover:shadow-3m hover:text-yy"
                                >
                                    開始遊戲
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {startGame && <GameBoard questions={shuffledQuestions} />}
            </menu>
        </>
    )
}

export default Game

// export async function Loader() {
//     const response = await fetch('http://localhost:3000/q')

//     if (!response.ok) {
//         return json(
//             { message: '無法連結網頁' },
//             {
//                 status: 500,
//             }
//         )
//     } else {
//         const resData = await response.json()
//         return resData.questions
//     }
// }
