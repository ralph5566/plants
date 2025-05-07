import { useCallback, useState } from 'react'

// import CheckSign from '../../Context/Sign'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import NavBar from './NavBar'
import HeaderBar from './HeaderBar'
import Button from '../Tools/Button'
import { authActions } from '../../redux/Sign'
// import { showBarActions } from '../../redux/showBarModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    // const { isSign, signChange } = useContext(CheckSign)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const showModal = useSelector((state) => state.showBar.isShow)

    const [showModal, setShowModal] = useState(false)

    const barShowHandler = useCallback(function showModalHandler() {
        console.log('show')
        setShowModal(true)
    }, [])

    const barCloseHandler = useCallback(function showModalHandler() {
        console.log('show')
        setShowModal(false)
    }, [])

    function handlerToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <HeaderBar onShowBar={barShowHandler} />
            <Button
                className="fixed z-20 duration-300 left-10 bottom-10 h-10 w-10 rounded-full hover:bg-yy  hover:shadow-3m"
                onClick={handlerToTop}
            >
                <FontAwesomeIcon
                    icon={faArrowUp}
                    className="text-md hover:scale-[1.5]"
                />
            </Button>

            {showModal && (
                <NavBar
                    showModal={showModal}
                    onBarClose={barCloseHandler}
                    onSignOut={() => {
                        dispatch(authActions.logout())
                        barCloseHandler()
                        navigate('/')
                    }}
                />
            )}
        </>
    )
}

export default Header
