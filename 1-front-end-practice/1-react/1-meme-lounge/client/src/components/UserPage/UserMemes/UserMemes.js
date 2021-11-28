import UserMemeCard from "./UserMemeCard/UserMemeCard.js";

const UserMemes = () => {

    return (
        <>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <UserMemeCard />
                <p class="no-memes">No memes in database.</p>
            </div>
        </>
    );

};

export default UserMemes;