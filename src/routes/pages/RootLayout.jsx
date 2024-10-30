import { Outlet } from 'react-router-dom'

import End from '../../components/RooterLayout/End'
import Header from '../../components/RooterLayout/Header'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <End />
        </>
    )
}

export default RootLayout

// export async function Action({ request }) {
//     const method = request.method
//     const formData = await request.formData()
//     const signData = Object.fromEntries(formData) // * {account:"...",password:'...}

//     console.log(signData)

//     const response = await fetch('http://localhost:3000/sign', {
//         method: method,
//         body: JSON.stringify(signData),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     // const resData = await response.json()

//     if (response.status === 422) {
//         return response
//     }

//     if (!response.ok) {
//         throw json({ message: '登入錯誤' }, { status: 500 })
//     }

//     return redirect('/')
// }
