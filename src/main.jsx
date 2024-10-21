import * as React from "react";
import * as ReactDOM from "react-dom/client"; // Bruk react-dom/client i stedet for react-dom
import Home from './Home';
import './index.css';
import Galleri from './pages/Galleri.tsx';
import Innslag from './pages/Innslag.tsx';
import KommerDu from './pages/KommerDu.tsx';
import Wishlist from './pages/Wishlist.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Opprett routeren
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Innslag",
    element: <Innslag />
  },
  {
    path: "Galleri",
    element: <Galleri />
  },
  {
    path: "KommerDu",
    element: <KommerDu />
  },
  {
    path: "wishlist",
    element: <Wishlist />
  }
]);

// Få tak i rot-elementet og bruk createRoot fra react-dom/client
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);