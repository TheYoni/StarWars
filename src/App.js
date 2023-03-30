import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharectersPage";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import ErrorPage from "./pages/ErrorPage";
import { StoreContextProvider } from "./store/store";

const router = createBrowserRouter([
  {
    pathe: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "charecters",
        element: <CharacterPage />,
      },
      {
        path: "planets",
        element: <PlanetsPage />,
      },
      {
        path: "starships",
        element: <StarshipsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
}

export default App;
