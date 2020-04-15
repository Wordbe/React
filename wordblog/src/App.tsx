import React from 'react';
import { Route } from 'react-router-dom';
import { Body } from './AppStyle';
import Header from "./component/header";
import Main from './view/Main'
import SignUp from './view/member/SignUp';

function App() {
  return (
    <Body>
      <Header></Header>
      <Route path="/" exact={true} component={Main} />
      <Route path="/sign-up" exact={true} component={SignUp} />
    </Body>
  );
}

export default App;
