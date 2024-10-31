import { Link, NavLink, useNavigate } from 'react-router-dom'

// import { useContext } from 'react'
// import CheckSign from '../../Context/Sign'

import { useDispatch } from 'react-redux'
import { plantNoActions } from '../../redux/PlantNo'
// import { showBarActions } from '../../redux/showBarModal'

const HeaderBar = ({ onShowBar }) => {
    // const { isSign, signChange } = useContext(CheckSign)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let nav_link =
        ' text-lg mr-4 duration-200 text-lightBlue hover:underline hover:underline-offset-8 '

    let nav_active = 'text-lg mr-4 text-yy underline underline-offset-8 '

    function plantsHandler(evt) {
        evt.preventDefault()
        dispatch(plantNoActions.setNo('01'))
        navigate('/plants')
    }

    // const showBarHandler = () => {
    //     dispatch(showBarActions.onShow())
    // }

    return (
        <>
            <header className="fixed justify-between p-5 items-center w-full overflow-hidden flex max-md:hidden z-[5]">
                <ul className=" inline-flex items-center">
                    <Link to="/plants">
                        <img
                            src="plants/img/IMG_logo02.png"
                            // src="http://localhost:3000/images/IMG_logo02.png"
                            className="w-24 me-7 relative top-px cursor-pointer"
                            alt="LOGO"
                        />
                    </Link>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? nav_active : nav_link
                        }
                    >
                        關於我們
                    </NavLink>
                    <NavLink
                        to="/illustrate"
                        className={({ isActive }) =>
                            isActive ? nav_active : nav_link
                        }
                        onClick={plantsHandler}
                    >
                        圖鑑
                    </NavLink>
                    <NavLink
                        to="/game"
                        className={({ isActive }) =>
                            isActive ? nav_active : nav_link
                        }
                    >
                        遊戲
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? nav_active : nav_link
                        }
                        to="/special"
                    >
                        宣傳
                    </NavLink>
                </ul>
            </header>

            <header className="hidden max-md:flex justify-center p-20 w-full border-b-4 border-yy bg-black">
                <button
                    className=" absolute mt-auto right-5"
                    type="button"
                    onClick={() => onShowBar()}
                >
                    <img src="plants/img/IMG_bar.png" alt="bar" />
                    {/* <img
                        src="http://localhost:3000/images/IMG_bar.png"
                        alt="bar"
                    /> */}
                </button>
                <Link to="/">
                    <img
                        alt="LOGO"
                        src="plants/img/IMG_logo03.png"
                        // src="http://localhost:3000/images/IMG_logo03.png"
                        className="w-40 relative top-px cursor-pointer "
                    />
                </Link>
            </header>
        </>
    )
}

export default HeaderBar
