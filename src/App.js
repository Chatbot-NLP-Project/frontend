import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav/SideNav";

import SignIn from "./pages/SignIn/index";
import SignUp from "./pages/SignUp/index";
// import DomainSelection from './pages/DomainSelection';
import Telecommunication from "./pages/Telecommunication/indexHome";
import LandingPage from "./pages/Landing/index";
import DomaineSelection from "./pages/DomainSelection/index";
import Profile from "./pages/Profile/index";
import Chat from "./pages/Healthcare/index";
import Chat3 from "./pages/Transportation/index";
import Chattel from "./pages/Telecommunication/index";
function App() {
  const [auth, setAuth] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    <ChakraProvider>
      <Router>
        <Navbar Auth={auth} />
        {/* add authentication to side nav */}
        {/* <SideNav /> */}
        <Switch>
          {/* Common Routes */}
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} exact />
          {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
          <Route path="/telecommunication" exact component={Telecommunication} exact/>
          <Route path="/" exact component={LandingPage} />
          <Route path="/domain" exact component={DomaineSelection} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/chat3" exact component={Chat3} />
          <Route path="/chattel" exact component={Chattel} />
          {/* <Route path="/profile/:id" exact component={Profile}/> */}
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
