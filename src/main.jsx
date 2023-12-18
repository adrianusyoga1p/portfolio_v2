import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='*'
      element={<App/>}
    />
  )
);

root.render(<RouterProvider router={router}/>)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// )
