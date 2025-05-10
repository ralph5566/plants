import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ children, open }) => {
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current

        if (open) {
            modal?.showModal() // 顯示 Modal
        } else {
            modal?.close() // 關閉 Modal
        }

        // return () => modal.close()
    }, [open])

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full h-screen z-10 bg-bgcB"
                        // ref={dialog}
                        // onClick={onClose}
                        // {...props}
                    >
                        <motion.dialog
                            ref={dialog}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="modal flex w-1/2 max-md:w-[85%] h-3/4 max-ss:h-2/3 border-none rounded-lg p-0 overflow-hidden mx-auto mt-32"
                            // open={open}
                            // onClose={open}
                            // className=" flex mx-auto my-auto  bg-bgcB h-full w-screen"
                        >
                            {children}
                            {/* {open ? children : null} */}
                        </motion.dialog>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.getElementById('modal')
    )
}

export default Modal
