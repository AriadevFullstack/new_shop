import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter, RouterProvider } from "react-router";
import { router } from "./routes/route.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <RouterProvider router={router} />
  </StrictMode>,
);
