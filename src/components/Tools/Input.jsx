const Input = ({
    id,
    name,
    type,
    value,
    length,
    auto,
    isSignUp = false,
    onBlur,
    ...props
}) => {
    let cssCss = 'block my-3 text-lightBlue'
    if (isSignUp) {
        cssCss = 'block my-[2px] text-lightBlue'
    }
    return (
        <>
            <p>
                <label className={cssCss} htmlFor={id}>
                    {name}
                </label>
                <input
                    className="block w-full p-2 rounded-lg border-none bg-bgcB text-left"
                    id={id}
                    name={id}
                    type={type === 'password' ? type : 'text'}
                    minLength={length}
                    required
                    autoComplete={auto}
                    value={value}
                    onBlur={onBlur}
                    {...props}
                />
            </p>
        </>
    )
}

export default Input
