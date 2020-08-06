import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.compoent';
import SignInUp from './pages/sign-in-up/sign-in-up.component';



const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp}/>
      </Switch>

    </div>
  );
}

export default App;
