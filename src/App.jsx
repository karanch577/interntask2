import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import EditProfile from './pages/EditProfile'
import Redeem from "./pages/Redeem"
import Scan from "./pages/Scan"
import Statements from "./pages/Statements"
import Error from './pages/Error'
import Options from './pages/Options'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/analytics",
          element: <Analytics />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/editprofile",
          element: <EditProfile />
        },
        {
          path: "/options",
          element: <Options />
        },
        {
          path: "/redeem",
          element: <Redeem />
        },
        {
          path: "/scan",
          element: <Scan />
        },
        {
          path: "/statements",
          element: <Statements />
        },
        {
          path: "/*",
          element: <Error />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
