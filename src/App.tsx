import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/slices/store';

import Navbar from './components/Navbar';
import routes from './config/routes';
import AuthCheck from './auth/AuthCheck';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                  <AuthCheck>
                    <route.component />
                  </AuthCheck>
                  ) : (
                    <route.component />
                  )
                }
                />
            )) }
          </Routes>
        </Provider>
      {/* Footer goes here */}
    </BrowserRouter>
  )
}

export default App
