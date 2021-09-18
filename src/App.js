import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav/SideNav";

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Profile from './pages/Profile/index';
// import DomainSelection from './pages/DomainSelection';
import Telecommunication from './pages/Telecommunication/index';

function App() {
  const [auth, setAuth] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    <ChakraProvider>
    <Router>
    <Navbar Auth={auth} />
    {/* add authentication to side nav */}
    {/* <SideNav />   */}
      <Switch >
        {/* Common Routes */}
        <Route path="/signUp" exact component={SignUp}/>
        <Route path="/signin" exact component={SignIn} exact/>
        {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
        {/* <Route path="/telecommunication" exact component={Telecommunication} exact/> */}

        {/* <Route path="/profile/:id" exact component={Profile}/> */}
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </Router>
  </ChakraProvider>
  );
}

export default App;
