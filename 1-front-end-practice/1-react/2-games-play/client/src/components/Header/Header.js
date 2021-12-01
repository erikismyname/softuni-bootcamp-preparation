import { Link } from 'react-router-dom';

import Nav from "./Nav/Nav.js";

const Header = () => {

    return (

        <header>
            <h1><Link class="home" to="/">GamesPlay</Link></h1>
            <Nav />
        </header>

    );

};

export default Header;