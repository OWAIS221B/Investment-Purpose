import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './components/pages/LandingPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
