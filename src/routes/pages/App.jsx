// import { json } from 'react-router-dom'
import Content from '../../components/Content/Content'
// import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            {/* <Outlet /> */}
            <main>
                <Content />
            </main>
        </>
    )
}

export default App

// async function loadPlants() {
//     const response = await fetch('http://localhost:3000/plants')

//     if (!response.ok) {
//         // return { isError: true, message: 'Could not fetch events' }
//         // throw new Response(JSON.stringify({ message: '無法連結網頁' }), {
//         //     status: 500,
//         // })

//         return json(
//             { message: '無法連結網頁' },
//             {
//                 status: 500,
//             }
//         )
//     } else {
//         const resData = await response.json()
//         return resData.plants
//         // const res = new Response('plant data', { status: 201 })
//         // return res
//     }
// }

// export async function Loader() {
//     // return defer({
//     //     plants: loadPlants(),
//     // })

//     const response = await fetch('http://localhost:3000/plants')

//     if (!response.ok) {
//         // return { isError: true, message: 'Could not fetch events' }
//         // throw new Response(JSON.stringify({ message: '無法連結網頁' }), {
//         //     status: 500,
//         // })

//         return json(
//             { message: '無法連結網頁' },
//             {
//                 status: 500,
//             }
//         )
//     } else {
//         const resData = await response.json()
//         return resData.plants
//         // const res = new Response('plant data', { status: 201 })
//         // return res
//     }
// }
