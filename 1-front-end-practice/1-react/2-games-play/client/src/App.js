import { Route, Switch } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext.js';

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

            <Header />

            <Switch>

                <Route path="/" exact component={Home} />

                <Route path="/catalog" component={Catalog} />

                <UserProvider>

                    <Route path="/login" component={Login} />

                    <Route path="/register" component={Register} />

                    <Route path="/details/:gameId" component={Details} />

                </UserProvider>

                <Route path="/create" component={Create} />

                <Route path="/edit/:gameId" component={Edit} />

            </Switch>

        </div >

    );

}

export default App;