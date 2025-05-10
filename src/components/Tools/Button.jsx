const Button = ({ type = 'button', children, ...props }) => {
    return (
        <>
            <button
                type={type}
                className="duration-300 mx-auto cursor-pointer px-6 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-lightBlue"
                {...props}
            >
                {children}
            </button>
        </>
    )
}

export default Button
