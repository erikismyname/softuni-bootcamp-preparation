import UserMemeCard from "./UserMemeCard/UserMemeCard.js";

const UserMemes = () => {

    return (
        <>
            <h1 id="user-listings-title">User Memes</h1>
            <div className="user-meme-listings">
                <UserMemeCard />
                <p className="no-memes">No memes in database.</p>
            </div>
        </>
    );

};

export default UserMemes;