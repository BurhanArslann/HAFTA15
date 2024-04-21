import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPages";
import Contact from "./routes/Contact"
import {loader as rootLoader} from "./routes/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ]
  },

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
