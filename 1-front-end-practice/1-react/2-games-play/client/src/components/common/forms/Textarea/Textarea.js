const Textarea = ({ id, name, placeholder, text }) => {

    return (

        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
        >
            {text}
        </textarea>

    );

};

export default Textarea;