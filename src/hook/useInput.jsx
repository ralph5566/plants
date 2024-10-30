import { useState } from 'react'

export function useInput(defaultValue, validationFn) {
    const [enterValue, setEnterValue] = useState(defaultValue)

    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enterValue)

    // console.log(enterValue + didEdit)

    function handlerChange(event) {
        setEnterValue(event.target.value)
        setDidEdit(false)
    }

    function handlerInputBlur() {
        // console.log(didEdit)
        setDidEdit(true)
    }

    return {
        value: enterValue,
        handlerChange,
        handlerInputBlur,
        hasError: didEdit && valueIsValid,
        isEdit: didEdit,
    }
}
