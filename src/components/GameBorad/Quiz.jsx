import { useRef } from 'react'
import GameTime from './GameTime'

const Quiz = ({ quiz, onAnswer, answerState, userAnswer, onTimeout }) => {
    const shuffledAnswers = useRef()

    if (answerState === '') {
        shuffledAnswers.current = [...quiz.options]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return (
        <>
            <div className="flex flex-col w-full mx-auto">
                <img
                    className="w-[19%] max-md:w-1/2 mx-auto mt-8 max-xl:mt-14 max-md:my-3"
                    src={quiz.img}
                    // src={`http://localhost:3000/${quiz.img}`}
                    alt={quiz.plant}
                />

                <div className="flex flex-col mx-auto my-0 w-5/6">
                    <h1 className="text-xl leading-[2]">{quiz.question}</h1>
                    <ul className="flex flex-col mt-0 mb-10 w-3/4 mx-auto max-sm:mt-5">
                        {shuffledAnswers.current.map((answer, index) => {
                            const isSelected = userAnswer === answer
                            let cssClass =
                                'w-1/2 max-md:w-3/4 px-2 mx-auto rounded-lg mt-6 shadow-3i hover:shadow-4i hover:bg-hoverPup max-ss:hover:bg-purple'

                            if (answerState === 'answer' && isSelected) {
                                cssClass += ' bg-deepBlue pointer-events-none'
                            }
                            // else if (answerState === 'answer') {
                            //     cssClass += ' bg-purple pointer-events-none'
                            // }
                            else if (
                                answerState === 'wrong' &&
                                answer === quiz.answer
                            ) {
                                cssClass += ' bg-red pointer-events-none'
                            } else if (
                                answerState === 'correct' &&
                                isSelected
                            ) {
                                cssClass += ' bg-green pointer-events-none'
                            }
                            // else if (
                            //     answerState === 'correct' ||
                            //     answerState === 'wrong'
                            // ) {
                            //     cssClass += ' bg-purple pointer-events-none'
                            // }
                            else {
                                cssClass += ' bg-purple'
                            }

                            return (
                                <button
                                    key={index}
                                    className={cssClass}
                                    onClick={() => onAnswer(answer)}
                                    disabled={answerState !== ''}
                                >
                                    <li className="hover:text-yy max-ss:hover:text-lightBlue">
                                        {answer}
                                    </li>
                                </button>
                            )
                        })}

                        {answerState === 'wrong' && (
                            <h1 className="text-red mx-3 mt-8">
                                {quiz.difficulty}
                            </h1>
                        )}
                    </ul>
                </div>

                <GameTime
                    mode={answerState}
                    onTimeout={answerState === '' ? onTimeout : null}
                    timeout={12000}
                    key={answerState}
                />
            </div>
        </>
    )
}

export default Quiz
