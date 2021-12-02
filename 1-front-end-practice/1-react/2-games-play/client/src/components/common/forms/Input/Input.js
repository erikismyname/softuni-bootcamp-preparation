const Input = ({ type, name, defaultValue, placeholder, id, className }) => {

    return (

        <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            id={id}
            className={className}
        />

    );

};

export default Input;