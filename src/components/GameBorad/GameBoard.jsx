import Quiz from './Quiz'
import { useState, useCallback } from 'react'
import Score from './Score'

const GameBoard = ({ questions }) => {
    const [newQuestions, setNewQuestions] = useState(questions)

    const [userAnswers, setUserAnswers] = useState([])
    const [answerState, setAnswerState] = useState('')
    const [score, setScore] = useState(0)

    const activeQuesIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1
    const quiz = newQuestions[activeQuesIndex]
    const quizComplete = activeQuesIndex > 9

    // console.log(userAnswers)
    // console.log(quiz.no)
    // console.log(score)

    const hightScore = JSON.parse(localStorage.getItem('HightScore'))

    const answerHandler = useCallback(
        function answerHandler(no) {
            setAnswerState('answer')
            setUserAnswers((prevUserAnswer) => {
                return [...prevUserAnswer, no]
            })

            let time = 2000
            setTimeout(() => {
                if (no === quiz.answer) {
                    setAnswerState('correct')
                    setScore((prevScore) => {
                        return prevScore + 10
                    })
                } else {
                    setAnswerState('wrong')
                    time += 3000
                }

                setTimeout(() => {
                    setAnswerState('')
                }, time)
            }, 1500)
        },
        [activeQuesIndex]
    )

    const handleSkipAnswer = useCallback(
        () => answerHandler(null),
        [answerHandler]
    )

    function gameStartHandler() {
        setUserAnswers([])
        setScore(0)
        setNewQuestions(() => questions.sort(() => Math.random() - 0.5))
        console.log(newQuestions)
    }

    if (quizComplete) {
        if (hightScore === null) {
            localStorage.setItem(`HightScore`, JSON.stringify({ score }))
        }

        if (hightScore.score < score) {
            localStorage.removeItem('HightScore')
            localStorage.setItem(`HightScore`, JSON.stringify({ score }))
        }
        return (
            <div id="summary" className="mt-16 max-md:my-16">
                <Score onStart={gameStartHandler} score={score} />
            </div>
        )
    }

    return (
        <>
            <div className="pt-0 max-md:pt-0">
                <Quiz
                    quiz={quiz}
                    onAnswer={answerHandler}
                    userAnswer={userAnswers[userAnswers.length - 1]}
                    answerState={answerState}
                    onTimeout={handleSkipAnswer}
                />
            </div>
        </>
    )
}

export default GameBoard
