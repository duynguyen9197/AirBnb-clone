import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundaries";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./modules/Auth/pages/Login";
const Register = lazy(() => import("./modules/Auth/pages/Register"));
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div> Loading...</div>}>
        <Router>
          <Switch>
          <Route path={"/"}>
              <MainLayout
            </Route>
            <Route path={["/login", "/register"]}>
              <AuthLayout>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            <Route path={"/admin"}>
              <AdminLayout></AdminLayout>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
