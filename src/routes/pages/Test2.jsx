import { useState } from 'react'
import Modal from '../../components/Modal/Modal'

const Test = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="pt-10">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 bg-blue-500 text-white"
            >
                Open Modal
            </button>
            <Modal open={isOpen}>
                <div>
                    <h2 className="text-xl mb-4">Modal Content</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 bg-red-500 text-white"
                    >
                        Close Modal
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Test
