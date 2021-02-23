// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInRegisterPage from './pages/signin-and-register/signin-and-register.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div class='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
