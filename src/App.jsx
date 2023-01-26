import React from 'react'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './components/redux/store'

const App = () => {
  return (
    <Provider store={store}>
        <div>
         <Navbar/>
         <MainPage/>
        </div>
    </Provider>
  
  )
}

export default App
