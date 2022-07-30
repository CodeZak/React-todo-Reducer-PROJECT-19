import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./components/style.css";

const container = document.getElementById("root");

createRoot(container).render(<App />);
