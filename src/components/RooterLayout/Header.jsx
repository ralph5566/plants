import { useCallback, useState } from 'react'

// import CheckSign from '../../Context/Sign'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import NavBar from './NavBar'
import HeaderBar from './HeaderBar'
import Button from '../Tools/Button'
import { authActions } from '../../redux/Sign'
// import { showBarActions } from '../../redux/showBarModal'

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
        window.scrollTo(0, 0)
    }

    return (
        <>
            <HeaderBar onShowBar={barShowHandler} />
            <Button
                className="fixed z-20 duration-300 left-10 bottom-10 rotate-90 h-10 w-10 rounded-lg hover:text-yy shadow-2m hover:shadow-3m"
                onClick={handlerToTop}
            >
                {`<`}
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
