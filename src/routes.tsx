import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'
import { IssuePost } from './pages/app/issue'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/issues/:id',
        element: <IssuePost />,
      },
    ],
  },
])
