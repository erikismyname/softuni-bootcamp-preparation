import { Link } from 'react-router-dom';

const ActionBtns = ({gameId}) => {

    return (

        <div className="buttons">
            <Link to={`/edit/${gameId}`} className="button">Edit</Link>
            <button className="button">Delete</button>
        </div>

    );

};

export default ActionBtns;