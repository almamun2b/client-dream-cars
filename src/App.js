import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Products from './pages/Home/Products/Products';
import Reviews from './pages/Home/Reviews/Reviews';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ProductDetails from './pages/PlaceOrder/ProductDetails/ProductDetails';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/products">
              <Products></Products>
            </PrivateRoute>
            <PrivateRoute path="/products/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
