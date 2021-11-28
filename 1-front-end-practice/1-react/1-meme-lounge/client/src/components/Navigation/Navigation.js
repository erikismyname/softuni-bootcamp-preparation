import UserNavigation from "./UserNavigation.js";
import GuestNavigation from "./GuestNavigation.js";

const Navigation = () => {

    return (
        <nav>
            <a href="#">All Memes</a>
            <UserNavigation />
            <GuestNavigation />
        </nav>
    );

};

export default Navigation;