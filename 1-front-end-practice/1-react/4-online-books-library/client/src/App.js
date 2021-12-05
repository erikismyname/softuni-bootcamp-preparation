

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

            <Header />

            <Dashboard />

            <Login />

            <Register />

            <Details />

            <Create />

            <Edit />

            <MyBooks />

            <Footer />

        </div>
    );

}

export default App;