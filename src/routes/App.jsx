import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import ProtectedRoute from "../Utilities/ProtectedRoute";

//Doing lazy loading so that our website can load fast
const Welcome = lazy(() => import("./Welcome"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Profile = lazy(() => import("./Profile"));
const ErrorPage = lazy(() => import("./error-page"));
const Quiz = lazy(() => import("./Quiz"));

const App = () => {
  //need to write authentication mechanism here
  const isAuthenticated = true;
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* these are the protected routes of the application */}
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
