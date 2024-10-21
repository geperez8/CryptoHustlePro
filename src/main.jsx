import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./routes/layout.jsx";
import DetailView from "./routes/DetailView.jsx";
import NotFound from "./routes/NotFOund.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route
          index={false}
          path="/coinDetails/:symbol"
          element={<DetailView />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
