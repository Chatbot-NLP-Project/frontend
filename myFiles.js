
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


return (
    <ChakraProvider>
      <Router>
      <Navbar Auth={auth} />
        <Switch >
            {/* Common Routes */}
            <Route path="/telecommunication" exact component={Telecommunication} exact/>
            <Route path="/healthcare" exact component={Healthcare} exact/>
            <Route path="/transport" exact component={Transport} exact/>
            <Route path="/chatbothc" exact component={ChatbotHC} />
            <Route path="/chatbotpt" exact component={ChatbotPT} />
            <Route path="/chatbottc" exact component={ChatbotTC} />
            {/* <Route path="/profile/:id" exact component={Profile}/> */}
            <Route path="/profile" exact component={Profile} />
            <Route path="/rating" exact component={Rating} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/domain" component={DomaineSelection} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/rating" exact component={Rating} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/signin" exact component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />
          {/* <Route path="/domainselection" exact component={DomainSelection} exact/> */}
          <Route path="/"  component={LandingPage} />
          </Switch>
        </Router>
      </ChakraProvider>
    );