import { useCallback, useEffect, useState } from 'react'

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
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    // const { isSign, signChange } = useContext(CheckSign)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 150)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
            <AnimatePresence>
                {showButton && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        exit={{ y: -30, opacity: 0 }}
                        className="fixed bottom-10 left-10 z-50"
                    >
                        <Button
                            className="bg-midnight h-10 w-10 rounded-full hover:bg-yy hover:shadow-3m duration-700"
                            onClick={handlerToTop}
                        >
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-md "
                            />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

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
