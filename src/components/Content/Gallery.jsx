import { useNavigation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

import Plants from '../Plants/Plants'
import PlantsDetails from './PlantDetails'

// import { useFetch } from '../../hook/useFetch'
// import { createPortal } from 'react-dom'
import PLANTS from '../../../public/plants'

const Gallery = () => {
    // const plants = useLoaderData()
    const navigation = useNavigation()

    // const { isFetching, error, fetchedData, setFetchedData } = useFetch(plants, [])

    // const [isFetching] = useState(false)
    const plants = PLANTS

    const [showDetail, setShowDetail] = useState(false)
    const [plantNo, setPlantNo] = useState('')

    const showDetailHandler = useCallback(
        function showDetailHandler(no) {
            setShowDetail(() => !showDetail)
            setPlantNo(no)
        },
        [showDetail]
    )

    if (plants.isError) {
        return <p>{plants.message}</p>
    }

    return (
        <>
            {navigation.state === 'loading' && <h1>Loading...</h1>}
            {navigation.state !== 'loading' && (
                <Plants>
                    <ul className="inline-block w-4/5 m-[5%] max-md:mt-16 duration-300">
                        {/* <Suspense fallback={<p>Loading...</p>}> */}
                        {/* <Await resolve={plants}> */}
                        {plants.map((plant) => (
                            <Link
                                className="inline-block mx-10 my-4 duration-300 "
                                key={plant.no}
                                onClick={() => showDetailHandler(plant.no)}
                            >
                                <div className="flex w-[20vh] rounded-lg p-3 border-lightBlue border hover:border-yy duration-500 ">
                                    <img
                                        src={plant.img}
                                        // src={`http://localhost:3000/${plant.img}`}
                                        className="hover:scale-[1.1] hover:rotate-2 duration-700"
                                        alt={plant.name}
                                    />
                                </div>
                                <h2 className="mt-4">{plant.name}</h2>
                            </Link>
                        ))}
                        {/* </Await> */}
                        {/* </Suspense> */}
                    </ul>
                </Plants>
            )}

            {showDetail && (
                <PlantsDetails
                    // plantModal={showDetail}
                    plants={plants}
                    onPlant={showDetailHandler}
                    no={plantNo}
                    plantModal={showDetail}
                />
            )}
        </>
    )
}

export default Gallery
