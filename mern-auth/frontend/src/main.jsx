import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'

import { Provider } from 'react-redux'
import store from './store.js'

import PrivateRoute from './components/PrivateRoute.jsx'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        {/* Private Routes */}
        <Route  element={<PrivateRoute />}>
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
  </Provider>
)
