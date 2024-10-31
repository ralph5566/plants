import { Link, NavLink, useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { plantNoActions } from '../../redux/PlantNo'
// import { showBarActions } from '../../redux/showBarModal'

const NavBar = ({ showModal, onBarClose }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let nav_link =
        'py-1 text-lightBlue hover:text-yy hover:underline hover:underline-offset-8 '

    let nav_active = 'py-1 text-yy  underline underline-offset-8'

    function plantsHandler(evt) {
        evt.preventDefault()
        onBarClose()
        dispatch(plantNoActions.setNo('01'))
        navigate('/plants')
    }

    return (
        <>
            <Modal open={showModal}>
                <div className="mx-auto my-auto">
                    <button
                        className=" absolute w-10 h-10 top-5 right-4 t text-4xl"
                        onClick={() => onBarClose()}
                    >
                        X
                    </button>

                    <div className="flex flex-col">
                        <Link
                            to="/plants"
                            onClick={(evt) => {
                                evt.preventDefault()
                                navigate('/'), onBarClose()
                            }}
                        >
                            <img
                                alt="LOGO"
                                src="plants/img/IMG_logo02.png"
                                // src="http://localhost:3000/images/IMG_logo02.png"
                                className="mx-auto w-36 pb-4 cursor-pointer "
                            />
                        </Link>
                        {/* <hr className="mb-6 w-4/5 mx-auto" /> */}
                        <div className="flex flex-col py-1 text-xl">
                            <NavLink
                                to="/about"
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    navigate('/about'), onBarClose()
                                }}
                                className={({ isActive }) =>
                                    isActive ? nav_active : nav_link
                                }
                            >
                                關於我們
                            </NavLink>
                            <NavLink
                                to="/illustrate"
                                onClick={plantsHandler}
                                className={({ isActive }) =>
                                    isActive ? nav_active : nav_link
                                }
                            >
                                圖鑑
                            </NavLink>
                            <NavLink
                                to="/game"
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    navigate('/game'), onBarClose()
                                }}
                                className={({ isActive }) =>
                                    isActive ? nav_active : nav_link
                                }
                            >
                                遊戲
                            </NavLink>

                            <NavLink
                                to="/special"
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    navigate('/special'), onBarClose()
                                }}
                                className={({ isActive }) =>
                                    isActive ? nav_active : nav_link
                                }
                            >
                                宣傳
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NavBar
