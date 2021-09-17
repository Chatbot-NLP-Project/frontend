import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";

import SignIn from "./pages/SignIn/index";
import SignUp from "./pages/SignUp/index";
// import DomainSelection from './pages/DomainSelection';
import Telecommunication from "./pages/Telecommunication/index";
import LandingPage from "./pages/Landing/index";
import DomaineSelection from "./pages/DomainSelection/index";

function App() {
  const [auth, setAuth] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    <ChakraProvider>
      <Router>
        <Navbar Auth={auth} />
        <Switch>
          {/* Common Routes */}
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} exact />
          {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
          {/* <Route path="/telecommunication" exact component={Telecommunication} exact/> */}
          <Route path="/home" exact component={LandingPage} />
          <Route path="/domain" exact component={DomaineSelection} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
