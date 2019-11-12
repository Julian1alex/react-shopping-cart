import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/base.css'
import {Provider} from "react-redux"
import store from "../redux/store"
import Filter from './Section1'
import Image from './Section2'
import Cart from './Section3'

function App() {

return (
  <Provider store={store}>
    <div className="appcontainer">
      <Filter/>
      <Image />
      <Cart />
    </div>
  </Provider>
  )
}

export default App