import React, {  lazy, Suspense } from "react";
import VistaIndex from "./vistas/VistaIndex";
import { Routes, Route } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">test loading</div>
  </div>
);

const Layout = lazy(() => import("./containers/Layout"));

function App() {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VistaIndex />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
