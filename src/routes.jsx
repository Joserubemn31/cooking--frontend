import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Landing from "./pages"
import Recipes from "./pages/recipes"
import Recipe from "./pages/recipe"
import Highlights from "./pages/highlights"
import About from "./pages/about"
import Chefs from "./pages/chefs"
import Chef from "./pages/chef"
import Category from "./pages/category"

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/receitas">
          <Recipes />
        </Route>
        <Route path="/categoria/:id">
          <Category />
        </Route>
        <Route path="/receita/:id">
          <Recipe />
        </Route>
        <Route path="/destaques">
          <Highlights />
        </Route>
        <Route path="/chefs">
          <Chefs />
        </Route>
        <Route path="/chef/:id">
          <Chef />
        </Route>
        <Route path="/chef/:id"></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
