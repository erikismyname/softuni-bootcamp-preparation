import { Switch, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext.js';

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

                    <Route path="/login" component={Login} />

                    <Route path="/register" component={Register} />

                    <Route path="/details/:bookId" component={Details} />

                    <Route path="/edit/:bookId" component={Edit} />

                    <Route path="/create" component={Create} />

                    <Route path="/my-books" component={MyBooks} />

                </Switch>

            </UserProvider>

            <Footer />

        </div>
    );

}

export default App;