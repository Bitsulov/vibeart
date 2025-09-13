import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/App.js";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error("⚠️ Root element not found. Приложение не будет смонтировано.");
    alert("Ошибка! Попробуйте перезагрузить страницу");
}
