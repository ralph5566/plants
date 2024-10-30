import { useState } from 'react'

export function useShow(defaultValue) {
    const [isShow, setIsShow] = useState(defaultValue)

    function handlerChange() {
        console.log(isShow)
        setIsShow(() => !isShow)
    }

    return {
        isShow: isShow,
        handlerChange,
    }
}
