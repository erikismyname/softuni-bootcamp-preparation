import { Link } from 'react-router-dom';

const UserMemeCard = ({ meme }) => {

    return (
        <div className="user-meme">
            <p className="user-meme-title">{meme.title}</p>
            <img className="userProfileImage" alt="meme-img" src={meme.imageUrl} />
            <Link className="button" to={`/details/${meme._id}`}>Details</Link>
        </div>
    );

};

export default UserMemeCard;