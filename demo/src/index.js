import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// HashRouter is used only to handle client-side routing on GitHub Pages.
// You can use BrowserRouter instead of HashRouter.
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#demo")
);
