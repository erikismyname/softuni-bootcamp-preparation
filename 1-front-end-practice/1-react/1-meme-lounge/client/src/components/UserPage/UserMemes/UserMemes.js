import UserMemeCard from "./UserMemeCard/UserMemeCard.js";

const UserMemes = ({ memes }) => {

    return (
        <>
            <h1 id="user-listings-title">User Memes</h1>
            <div className="user-meme-listings">

                {memes.length
                    ? memes.map(m => <UserMemeCard key={m._id} meme={m} />)
                    : <p className="no-memes">No memes in database.</p>
                }

            </div>
        </>
    );

};

export default UserMemes;