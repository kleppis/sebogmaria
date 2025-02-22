import * as React from "react";
import * as ReactDOM from "react-dom/client"; // Bruk react-dom/client i stedet for react-dom
import Home from "./Home";
import "./index.css";
import Galleri from "./pages/Galleri";
import Innslag from "./pages/Innslag";
import KommerDu from "./pages/KommerDu";
import Wishlist from "./pages/Wishlist";
import History from "./pages/History";
import { Analytics } from "@vercel/analytics/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InvitasjonPage from "./pages/Invitasjon";

// Opprett routeren
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "innslag", // Endret til små bokstaver for å unngå routingproblemer
    element: <Innslag />,
  },
  {
    path: "galleri", // Endret til små bokstaver for konsistens
    element: <Galleri />,
  },
  {
    path: "kommerdu", // Endret til små bokstaver for konsistens
    element: <KommerDu />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    path: "history",
    element: <History />,
  },
  {
    path: "invitasjon/:navn",
    element: <InvitasjonPage />,
  },
]);

// Få tak i rot-elementet og bruk createRoot fra react-dom/client
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Fant ikke root-elementet i HTML-dokumentet.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
