import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogpage from "./components/blogpage/Blogpage.jsx";
import Subblogpage from "./components/blogpage/Subblogpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "blogpage",
        element: <Blogpage />,
      },
      {
        path: "blogpage/subblogpage/:postId",
        element:<Subblogpage/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
