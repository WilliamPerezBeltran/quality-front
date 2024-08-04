import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/index/Index";
import VistaIndex from "./vistas/VistaIndex";
import { AuthProvider } from "./components/auth/Index";
import { AuthRouteComponent } from "./components/auth/Index";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading...</div>
  </div>
);

const Layout = lazy(() => import("./containers/Layout"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route
            path="/vista"
            element={
              <AuthRouteComponent>
                <Layout>
                  <VistaIndex />
                </Layout>
              </AuthRouteComponent>
            }
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
