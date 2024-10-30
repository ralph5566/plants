const Plants = ({ children, buttons }) => {
    return (
        <>
            {children}
            <menu style={{ margin: 0, padding: 0 }}>{buttons}</menu>
        </>
    )
}

export default Plants
