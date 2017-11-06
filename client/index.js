import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StripeProvider } from 'react-stripe-elements'
import store from './store'
import Routes from './routes'
import 'semantic-ui-css/semantic.min.css'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
      <Routes />
    </StripeProvider>
  </Provider>,
  document.getElementById('app')
)
