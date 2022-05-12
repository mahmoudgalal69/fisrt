import "./App.css"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import Cart from "./pages/cart"
import Product from "./pages/product"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import BackDrop from "./components/backDrop"
import SideDrawer from "./components/sideDrawer"
import { useState } from "react"
function App() {

  const [togller , settogller]= useState(false)
  return (
  <Router >
    <SideDrawer togller={togller} click={()=>settogller(false)}/>
    <BackDrop togller={togller} click={()=>settogller(false)}/>
    <Navbar click={()=>settogller(true)}/>
    <Switch >
      <Route exact path="/"  component={Home}/>
      <Route  path="/:id"  component={Product}/>
      <Route  path="/cart" component={Cart}/>
    </Switch>
  </Router>
  ); 
}

export default App;
