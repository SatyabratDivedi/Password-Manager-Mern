import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { oneDataLoader, Updatepage } from './Updatepage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/update/:id",
    element: <Updatepage/>,
    loader: oneDataLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <div className=" selection:text-green-600 min-h-screen top-0 z-[-2] w-screen transform bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <Toaster toast={toast} />
        <RouterProvider router={router} />
      </div>
    </>
  </React.StrictMode>,
)
