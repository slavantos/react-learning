import { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './css/libs.min.css';
import './css/simple-line-icons.css';
import './css/main.css';
import './App.css';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';


function App() {

  return (
    <Suspense fallback="...loading">
      <Router>
        <div className="app-wrapper">
        <Routes>
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
