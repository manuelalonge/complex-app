import React, { useState, useReducer } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"

// My Components
import Header from "./Header"
import HomeGuest from "./HomeGuest"
import Home from "./Home"
import Footer from "./Footer"
import About from "./About"
import Terms from "./Terms"
import CreatePost from "./CreatePost"
import ViewSinglePost from "./ViewSinglePost"
import FlashMessages from "./FlashMessages"
import ExampleContext from "./ExampleContext"

Axios.defaults.baseURL = "http://localhost:8080"

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")))
  const [flashMessages, setFlashMessages] = useState([])

  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg))
  }

  return (
    <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Home /> : <HomeGuest />}
          </Route>
          <Route path="/post/:id">
            <ViewSinglePost />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  )
}

if (module.hot) {
  module.hot.accept()
}

export default Main
