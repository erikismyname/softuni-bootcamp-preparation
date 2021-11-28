import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/Home.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import UserRegister from "./components/UserRegister/UserRegister.js";
import AllMemes from "./components/AllMemes/AllMemes.js";
import CreateMeme from "./components/CreateMeme/CreateMeme.js";
import EditMeme from "./components/EditMeme/EditMeme.js";
import DetailsMeme from "./components/DetailsMeme/DetailsMeme.js";
import UserPage from "./components/UserPage/UserPage.js";
import Footer from "./components/Footer/Footer.js";

function App() {

    return (
        <div id="container">

            <Navigation />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={UserLogin} />
                <Route path="/register" component={UserRegister} />
                <Route path="/all-memes" component={AllMemes} />
                <Route path="/create-meme" component={CreateMeme} />
                <Route path="/details/:memeId" component={DetailsMeme} />
                <Route path="/edit/:memeId" component={EditMeme} />
                <Route path="/my-profile" component={UserPage} />
            </Switch>

            <Footer />

        </div>
    );

}

export default App;