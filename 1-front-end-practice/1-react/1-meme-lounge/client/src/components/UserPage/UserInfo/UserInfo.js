const UserInfo = ({ user, memesCount }) => {

    const userImageUrl = `/images/${user.gender == 'male' ? 'male' : 'female'}.png`;

    return (
        <article className="user-info">
            <img id="user-avatar-url" alt="user-profile" src={userImageUrl} />
            <div className="user-content">
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>My memes count: {memesCount}</p>
            </div>
        </article>
    );

};

export default UserInfo;