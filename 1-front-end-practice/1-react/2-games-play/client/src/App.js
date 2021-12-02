import { Route, Switch } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext.js';
import isUser from './guards/isUser.js';
import isGuest from './guards/isGuest.js';
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Create from "./components/Create/Create.js";
import Edit from "./components/Edit/Edit.js";
import Details from "./components/Details/Details.js";
import Catalog from "./components/Catalog/Catalog.js";

function App() {

    return (

        <div id="box">

            <UserProvider>

                <Header />

                <Switch>

                    <Route path="/" exact component={Home} />

                    <Route path="/catalog" component={Catalog} />

                    <Route path="/login" component={isGuest(Login)} />

                    <Route path="/register" component={isGuest(Register)} />

                    <Route path="/details/:gameId" component={Details} />

                    <Route path="/create" component={isUser(Create)} />

                    <Route path="/edit/:gameId" component={isUser(Edit)} />

                </Switch>

            </UserProvider>

        </div >

    );

}

export default App;