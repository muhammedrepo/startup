import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutPage,
  BlogGrid,
  BlogSidebar,
  BlogSingle,
  Contact,
  Error,
  HomePage,
  Register,
  SignIn,
} from "./container";

import { Layout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog-grid",
        element: <BlogGrid />,
      },
      {
        path: "/blog-sidebar",
        element: <BlogSidebar />,
      },
      {
        path: "/blog-details",
        element: <BlogSingle />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
