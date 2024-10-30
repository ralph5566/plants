import { createContext, useState } from 'react'

const CheckSign = createContext({
    isSign: false,
    signChange: () => {},
    signUp: () => {},
})

// function signReducer(state, action) {
//     if (action.type === 'SIGN_CHANGE') {
//         if (state.isSign == true) {
//             state.isSign = false
//             console.log(state.isSign + action.user)
//         } else if (state.isSign == false) {
//             state.isSign = true
//             console.log(state.isSign + action.user)
//         }
//         return state
//     }

//     if (action.type === 'SIGN_NEW') {
//         console.log(action.newUser)

//         return action.newUser
//     }

//     return state
// }

export function SignProvider({ children }) {
    const [isSign, setIsSign] = useState(false)

    // const [signState, dispatchCartAction] = useReducer(signReducer, {
    //     isSign: false,
    // })

    function signChange() {
        // dispatchCartAction({ type: 'SIGN_CHANGE', user })
        setIsSign(!isSign)

        localStorage.setItem(`Sign`, JSON.stringify(true))
    }

    function signUp(newUser) {
        // dispatchCartAction({ type: 'SIGN_NEW', newUser })

        if (newUser) {
            console.log(newUser)
        }
    }

    const ctxSign = {
        // isSign: signState.isSign,

        isSign: isSign,
        signChange,
        signUp,
    }

    console.log(ctxSign.isSign)

    return <CheckSign.Provider value={ctxSign}>{children}</CheckSign.Provider>
}

export default CheckSign
