import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

const Global = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  }`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Provider store={store}>
          <Global />
          <App />
        </Provider>
      </>
    </BrowserRouter>
  </React.StrictMode>
)
