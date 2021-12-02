const Textarea = ({ id, name, placeholder, defaultValue }) => {

    return (

        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />

    );

};

export default Textarea;