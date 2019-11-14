import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"

import * as Sentry from "@sentry/browser"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "../components/App"
import store from "../redux/store"
import LogRocket from "logrocket"
LogRocket.init("1eugfg/atlas")
Sentry.init({ dsn: "https://6bf6e05112f444059aadd9afe4dc03fd@sentry.io/1820422", release: "atlas@0.0.1" })
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("map-container"),
)
