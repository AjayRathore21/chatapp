import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles.scss";

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {   // when user is logged in then allow to access the home page else login page
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    // applied all the routes in the app
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
