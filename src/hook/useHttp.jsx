import { useCallback, useEffect, useState } from 'react'

async function sendHttpReq(url, config) {
    const response = await fetch(url, config)

    const resData = await response.json()

    if (!response.ok) {
        throw new Error(resData.message || 'Failed to send req')
    }

    return resData
}

export default function useHttp(url, config, initialValue) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState(initialValue)

    const sendRequest = useCallback(
        async function sendRequest(data) {
            setIsLoading(true)
            try {
                const resData = await sendHttpReq(url, {
                    ...config,
                    body: data,
                })
                setData(resData)
                setError(null)
                console.log(error)
            } catch (error) {
                setError(() => error.message || 'Something Error')
            }
            setIsLoading(false)

            // console.log(error)
            return error
        },
        [url, config]
    )

    useEffect(() => {
        if (
            (config && (config.method === 'GET' || !config.method)) ||
            !config
        ) {
            sendRequest()
        }
    }, [sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
    }
}
