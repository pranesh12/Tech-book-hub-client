import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";
import CheckOut from "./Components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Order from "./Components/Order/Order";
export const BookContext = createContext();
function App() {
  const [book, setBook] = useState([]);
  const [login, setLogin] = useState({
    email: null,
    name: null,
  });
  return (
    <BookContext.Provider value={{ book, setBook, login, setLogin }}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </BookContext.Provider>
  );
}

export default App;
