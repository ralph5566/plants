import { useState, useEffect } from 'react'

export function useFetch(fetchFu, initialValue) {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true)
            try {
                const data = await fetchFu()
                setFetchedData(data)
            } catch (error) {
                setError({ message: error.message || 'Failed to Fetch Data' })
            }

            setIsFetching(false)
        }

        fetchData()
    }, [fetchFu])

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData,
    }
}
