import { Link } from 'react-router-dom';

const DetailsMemeBtns = ({ token, memeId, deleteMeme, history }) => {

    const onDeleteBtnClick = async () => {

        const isConfirmed = window.confirm('Are you sure?');

        if (isConfirmed) {

            await deleteMeme(memeId, token);

            history.push('/all-memes');

        }

    };

    return (
        <>
            <Link
                className="button warning"
                to={`/edit/${memeId}`}
            >
                Edit
            </Link>
            <button
                onClick={onDeleteBtnClick} className="button danger"
            >
                Delete
            </button>
        </>
    );

};

export default DetailsMemeBtns;