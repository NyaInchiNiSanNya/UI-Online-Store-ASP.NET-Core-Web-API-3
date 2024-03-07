export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
    <div>
        {hasError && <span>{meta.error}</span>}
        <div>
            <input {...input} {...props}/>
        </div>
    </div>
    )
}
