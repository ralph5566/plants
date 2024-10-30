import { Link } from 'react-router-dom'
import Button from '../../components/Tools/Button'
import { useRouteError } from 'react-router-dom'
import RootLayout from './RootLayout'
import Header from '../../components/RooterLayout/Header'
import End from '../../components/RooterLayout/End'

const Error = () => {
    // const navigate = useNavigate()

    // function homeHandler() {
    //     navigator('..')
    // }

    const error = useRouteError()

    let title = '發生錯誤'
    let message = '重新載入...'

    if (error.status === 500) {
        message = JSON.parse(error.data).message
    }

    if (error.status === 404) {
        title = '找不到網頁'
        message = '網頁可能已經移除或暫時無法使用'
    }

    return (
        <>
            <Header />

            <div className="error pt-20 h-screen">
                <img
                    className="w-1/2 mx-auto max-md:w-5/6"
                    src="img/IMG_005.jpg"
                />
                <div className="my-10">
                    <h1 className="text-5xl mb-3">{title}</h1>
                    <p className="text-2xl mt-8">{message}</p>
                </div>

                <div className=" mb-20">
                    <Link to="/">
                        <Button>首頁</Button>
                    </Link>
                </div>
            </div>

            <End />
        </>
    )
}

export default Error
