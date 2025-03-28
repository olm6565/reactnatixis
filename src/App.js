import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';

function App() {
  return (
    <Router>
      <div>
        <h1>E-commerce</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
