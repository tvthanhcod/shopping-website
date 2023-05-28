import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePublic } from './routes/public';

import './App.css';




const App = () => {
  return (
    <Router>
      <Routes>
        {routePublic.map((route, index) => {
          const {path, page} = route
          return (
            <Route key={index} path={path} element={page} />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App;
