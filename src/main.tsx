import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import { router } from "./routes/route.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <RouterProvider router={router} />
  </StrictMode>,
);
