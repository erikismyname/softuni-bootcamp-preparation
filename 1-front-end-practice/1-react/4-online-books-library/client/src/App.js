import { Switch, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext.js';

import isGuest from './guards/isGuest.js';
import isUser from './guards/isUser.js';

import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Details from "./components/Details/Details.js";
import Create from "./components/Create/Create.js";
import Edit from "./components/Edit/Edit.js";
import MyBooks from "./components/MyBooks/MyBooks.js";
import Footer from "./components/Footer/Footer.js";

function App() {

    return (
        <div id="container">

            <UserProvider>

                < Header />

                <Switch>

                    <Route path="/dashboard" component={Dashboard} />

                    <Route path="/login" component={isGuest(Login)} />

                    <Route path="/register" component={isGuest(Register)} />

                    <Route path="/details/:bookId" component={Details} />

                    <Route path="/edit/:bookId" component={isUser(Edit)} />

                    <Route path="/create" component={isUser(Create)} />

                    <Route path="/my-books" component={isUser(MyBooks)} />

                </Switch>

            </UserProvider>

            <Footer />

        </div>
    );

}

export default App;