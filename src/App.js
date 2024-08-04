import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VistaIndex from "./vistas/VistaIndex";
import { AuthProvider } from "./components/auth/Index"; // Importa solo AuthProvider

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading...</div>
  </div>
);

const Layout = lazy(() => import("./containers/Layout"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<VistaIndex />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
