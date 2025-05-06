import Modal from '../Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SpecialDetail = ({ onShow, img, showModal }) => {
    return (
        <>
            <Modal open={showModal}>
                <div className="bg-content-bgc bg-contain w-full">
                    <button
                        className=" absolute w-10 h-10 top-5 right-4 t text-4xl"
                        onClick={onShow}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <img
                        src={img}
                        className="mx-auto p-8 h-full object-contain"
                    />
                </div>
            </Modal>
        </>
    )
}

export default SpecialDetail
