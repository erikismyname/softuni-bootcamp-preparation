import { Link } from 'react-router-dom';

const AllMemesCard = ({ meme }) => {

    return (
        <div className="meme">
            <div className="card">
                <div className="info">
                    <p className="meme-title">{meme.title}</p>
                    <img className="meme-image" alt="meme-img" src={meme.imageUrl} />
                </div>
                <div id="data-buttons">
                    <Link className="button" to={`/details/${meme._id}`}>Details</Link>
                </div>
            </div>
        </div>
    );

};

export default AllMemesCard;