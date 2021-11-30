const Input = ({ type, name, value, placeholder, id, className }) => {

    return (

        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            className={className}
        />

    );

};

export default Input;