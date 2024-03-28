import { createBrowserHistory, History } from "history"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import Router from "./Router"
import { Provider } from "react-redux"
import store from "./store/index.ts"
import React from "react"

function App(): JSX.Element {
  const history: History = createBrowserHistory({ window })

  return (
    <HistoryRouter history={history}>
      <Provider store={store}>
        <Router />
      </Provider>
    </HistoryRouter>
  )
}

export default App
