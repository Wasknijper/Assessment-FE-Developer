import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Overview } from "./pages/Overview/";
import { NewPassword } from "./pages/NewPassword/NewPassword";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <header>
      <a href="/">Overview</a>
      <a href="/new">Add new password</a>
    </header>
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="new" element={<NewPassword />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
