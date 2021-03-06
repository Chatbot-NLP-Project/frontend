////////////////////////////////
//// Import Modules
///////////////////////////////
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Axios from "axios";

////////////////////////////////
//// Import Pages
///////////////////////////////
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav/SideNav";
import SignIn from "./pages/SignIn/index";
import SignUp from "./pages/SignUp/index";
// import DomainSelection from './pages/DomainSelection';
import Telecommunication from "./pages/Telecommunication/indexHome";
import Healthcare from "./pages/Healthcare/indexHome";
import Transport from "./pages/Transportation/indexHome";
import LandingPage from "./pages/Landing/index";
import DomaineSelection from "./pages/DomainSelection/index";
import Profile from "./pages/Profile/index";
import ChatbotHC from "./pages/Healthcare/index";
import ChatbotPT from "./pages/Transportation/index";
import ChatbotTC from "./pages/Telecommunication/index";
import Rating from "./pages/Admin/rating";
import Admin from "./pages/Admin/index";
import AboutUs from "./pages/AboutUs/index";
// import Location from "./pages/Location/CurrentLocation";


function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, userID: 0 });
  const [signInClicked, setSignInClicked] = useState(false);
  // Axios.defaults.withCredentials = true;

  useEffect(() => {
    // Axios.defaults.withCredentials = true;
    // console.log("check login called")
    // Axios.get("http://localhost:5000/checkLogin").then((response) => {
    //   console.log("check login axios")
    // if (!!localStorage.expiry) {
    //   const now = new Date()
    //   console.log(JSON.parse(localStorage.getItem("expiry")))
    //   if(JSON.parse(localStorage.getItem("user")) < now) {
    //     localStorage.removeItem('expiry')
    //     localStorage.removeItem('user')
    //   }
    // }
    if (!!localStorage.access_token) {
      setAuth({
        isLoggedIn: true,
        userID: JSON.parse(localStorage.getItem("user"))["user_id"],
      });
      console.log(auth);
    } else {
      console.log("sssseeee");
      // console.log(response.data.user)
      setAuth({ isLoggedIn: false, userID: 0 });
    }
    // });
  }, [localStorage.access_token]);

  ////////////////////////////////
  //// If User Logged In
  ///////////////////////////////
  if (auth.isLoggedIn) {
    ////////////////////////////////
    //// If user is an admin
    ///////////////////////////////
    if (auth.userID === 1) {
      return (
        <ChakraProvider>
          <Router>
            <Navbar Auth={auth} />
            <Switch>
              {/* Common Routes */}
              <Route path="/rating" exact component={Rating} />
              <Route path="/aboutus" exact component={AboutUs} />
              <Route path="/" component={Admin} />
            </Switch>
          </Router>
        </ChakraProvider>
      );
    ////////////////////////////////
    //// If user is a normal user
    ///////////////////////////////
    } else {
      return (
        <ChakraProvider>
          <Router>
            <Navbar Auth={auth} />
            <Switch>
              {/* Common Routes */}
              <Route
                path="/telecommunication"
                exact
                component={Telecommunication}
                exact
              />
              <Route path="/healthcare" exact component={Healthcare} exact />
              <Route path="/transport" exact component={Transport} exact />
              <Route path="/chatbothc" exact component={ChatbotHC} />
              <Route path="/chatbotpt" exact component={ChatbotPT} />
              <Route path="/chatbottc" exact component={ChatbotTC} />
              {/* <Route path="/profile/:id" exact component={Profile}/> */}
              <Route path="/profile" exact component={Profile} />
              <Route path="/rating" exact component={Rating} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/aboutus" exact component={AboutUs} />
              {/* <Route path="/location" exact component={Location} /> */}

              <Route path="/" component={DomaineSelection} />
            </Switch>
          </Router>
        </ChakraProvider>
      );
    }
  } else {
    return (
      <ChakraProvider>
        <Router>
          <Navbar Auth={auth} />
          {/* add authentication to side nav */}
          {/* <SideNav /> */}
          <Switch>
            {/* Common Routes */}
            <Route path="/signUp" exact component={SignUp} />
            <Route
              path="/signin"
              exact
              component={() => {
                return <SignIn setSignInClicked={setSignInClicked} />;
              }}
            />
            {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </ChakraProvider>
    );
  }
}
export default App;
