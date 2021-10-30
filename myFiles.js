
// if(auth.isLoggedIn){
//     if(auth.userID === 1){
//       return (
//         <ChakraProvider>
//           <Router>
//           <Navbar Auth={auth} />
//             <Switch >
//                 {/* Common Routes */}
//                 <Route path="/rating" exact component={Rating} />
//                 <Route path="/"  component={Admin} />
//               </Switch>
//             </Router>
//           </ChakraProvider>
//         );
//     } else {
//       return (
//         <ChakraProvider>
//           <Router>
//           <Navbar Auth={auth} />
//             <Switch >
//                 {/* Common Routes */}
//                 <Route path="/telecommunication" exact component={Telecommunication} exact/>
//                 <Route path="/healthcare" exact component={Healthcare} exact/>
//                 <Route path="/transport" exact component={Transport} exact/>
//                 <Route path="/chatbothc" exact component={ChatbotHC} />
//                 <Route path="/chatbotpt" exact component={ChatbotPT} />
//                 <Route path="/chatbottc" exact component={ChatbotTC} />
//                 {/* <Route path="/profile/:id" exact component={Profile}/> */}
//                 <Route path="/profile" exact component={Profile} />
//                 <Route path="/rating" exact component={Rating} />
//                 <Route path="/admin" exact component={Admin} />
//                 <Route path="/" component={DomaineSelection} />
//               </Switch>
//             </Router>
//           </ChakraProvider>
//         );
//     }
    
//   } else {
//     return(
//     <ChakraProvider>
//       <Router>
//         <Navbar Auth={auth} />
//         {/* add authentication to side nav */}
//         {/* <SideNav /> */}
//         <Switch>
//           {/* Common Routes */}
//           <Route path="/signUp" exact component={SignUp} />
//           <Route path="/signin" exact component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />
//           {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
//           <Route path="/"  component={LandingPage} />
//         </Switch>
//       </Router>
//     </ChakraProvider>
//   );
// }


//react-scripts test


// return (
//     <ChakraProvider>
//       <Router>
//       <Navbar Auth={auth} />
//         <Switch >
//             {/* Common Routes */}
//             <Route path="/telecommunication" exact component={Telecommunication} exact/>
//             <Route path="/healthcare" exact component={Healthcare} exact/>
//             <Route path="/transport" exact component={Transport} exact/>
//             <Route path="/chatbothc" exact component={ChatbotHC} />
//             <Route path="/chatbotpt" exact component={ChatbotPT} />
//             <Route path="/chatbottc" exact component={ChatbotTC} />
//             {/* <Route path="/profile/:id" exact component={Profile}/> */}
//             <Route path="/profile" exact component={Profile} />
//             <Route path="/rating" exact component={Rating} />
//             <Route path="/admin" exact component={Admin} />
//             <Route path="/domain" component={DomaineSelection} />
//             <Route path="/signUp" exact component={SignUp} />
//             <Route path="/rating" exact component={Rating} />
//             <Route path="/admin" exact component={Admin} />
//             <Route path="/signin" exact component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />
//           {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
//           <Route path="/"  component={LandingPage} />
//           </Switch>
//         </Router>
//       </ChakraProvider>
//     );


// npm run test:CI

//To get the stats of you test coverage, you can run below command which will generate the coverage report inside “coverage/lcov-report/index.html” of project root folder
// npm run test -- --coverage --watchAll
//            or
// npm run test:CI -- --coverage

// "jest": {
//     ...,
//     "reporters": [
//       "default",
//       "jest-html-reporters"
//     ],
//     ...
//   }

// npm test coverage

//babelrc

// ///**
//  * @jest-environment jsdom
// */

// "scripts": {
//     "start": "react-scripts -r @cypress/instrument-cra start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "cy:open": "cypress open",
//     "dev": "start-test 3000 cy:open",
//     "eject": "react-scripts eject",
//     "test:CI": "set CI=true &&react-scripts test --env=jsdom --testResultsProcessor=./node_modules/jest-html-reporter"
//   },