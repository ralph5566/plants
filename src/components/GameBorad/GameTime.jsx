import { useState, useEffect } from 'react'
import './GameTime.css'

const GameTime = ({ timeout, onTimeout, mode }) => {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        // console.log('SET INTERVAL')

        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100)

        return () => {
            // console.log('CLEAR INTERVAL')
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        // console.log('SET TIMEOUT')

        const timer = setTimeout(onTimeout, timeout)

        return () => {
            // console.log('CLEAR TIMEOUT')
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    return (
        <>
            <progress
                id="question-time"
                max={timeout}
                className={`${mode} p-0 m-0 relative bottom-0 left-0 w-full  `}
                value={remainingTime}
            ></progress>
        </>
    )
}

export default GameTime
