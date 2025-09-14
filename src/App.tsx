import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Notifications } from '@features/Notifications'
import { Page404 } from '@pages/404'
import { HomePage } from '@pages/Home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
])

export function App() {
  return (
    <Notifications>
      <RouterProvider router={router} />
    </Notifications>
  )
}
