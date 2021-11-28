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

            <Home />

            <UserLogin />

            <UserRegister />

            <AllMemes />

            <CreateMeme />

            <EditMeme />

            <DetailsMeme />

            <UserPage />

            <Footer />

        </div>
    );

}

export default App;