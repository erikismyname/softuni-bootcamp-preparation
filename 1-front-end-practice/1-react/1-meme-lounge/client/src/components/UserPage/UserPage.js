import UserInfo from "./UserInfo/UserInfo.js";
import UserMemes from "./UserMemes/UserMemes.js";

const UserPage = () => {

    return (
        <section id="user-profile-page" className="user-profile">
            <UserInfo />
            <UserMemes />
        </section>
    );

};

export default UserPage;