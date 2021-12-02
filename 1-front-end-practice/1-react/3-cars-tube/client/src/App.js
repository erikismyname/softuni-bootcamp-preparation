import { Switch, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext.js';

import isGuest from './guards/isGuest.js';
import isUser from './guards/isUser.js';

import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Catalog from "./components/Catalog/Catalog.js";
import Create from "./components/Create/Create.js";
import Edit from "./components/Edit/Edit.js";
import Details from "./components/Details/Details.js";
import Profile from "./components/Profile/Profile.js";
import Search from "./components/Search/Search.js";
import Footer from "./components/Footer/Footer.js";

function App() {

    return (
        <div id="container">

            <UserProvider>

                < Header />

                <Switch>

                    <Route path="/" exact component={Home} />

                    <Route path="/catalog" component={Catalog} />

                    <Route path="/login" component={isGuest(Login)} />

                    <Route path="/register" component={isGuest(Register)} />

                    <Route path="/create" component={isUser(Create)} />

                    <Route path="/edit/:carId" component={isUser(Edit)} />

                    <Route path="/details/:carId" component={Details} />

                    <Route path="/profile" component={isUser(Profile)} />

                    <Route path="/search" component={Search} />

                </Switch>

            </UserProvider>

            <Footer />

        </div>
    );

}

export default App;