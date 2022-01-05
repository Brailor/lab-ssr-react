import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'


const btn = document.getElementById("hydrate")
btn?.addEventListener("click", () => {
    alert("React hydration will take effect now!")
    ReactDOM.hydrate(<App />, document.getElementById("app"))
}, {once: true})



