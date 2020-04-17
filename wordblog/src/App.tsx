import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./component/header";
import Main from './view/Main'
import SignUp from './view/member/SignUp';
import Footer from './component/footer';

function App() {
  return (
    <>
      <Header></Header>
      <Route path="/" exact={true} component={Main} />
      <Route path="/sign-up" exact={true} component={SignUp} />
      <Footer></Footer>
    </>
  );
}

export default App;
