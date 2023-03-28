import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Committee from './components/Committee'
import Report from './components/Report'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Scheduling from './components/Scheduling'
import ActivityLog from './components/ActivityLog'
import Booking from './components/Booking';
import Login from './components/Login';
import Booking1 from './components/Booking1';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import WriteReport from './components/WriteReport';
import Csi from './components/Csi';
import Acm from './components/Acm';
import Gdse from './components/Gdse';
import Ieee from './components/Ieee';
import Iste from './components/Iste';
import TuringHut from './components/TuringHut';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[{
        path:"/",
        element:<Home/>
      },
      {
        path:"/committee",
        element:<Committee/>
      },
      {
        path:"/activityLog",
        element:<ActivityLog/>
      },
      {
        path:"/report",
        element:<Report/>
      },
      {
        path:"/scheduling",
        element:<Scheduling/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        path:"/booking",
        element:<Booking/>
      },
      {
        path:"/login",
        element:<Login/>
      },
    
      {
        path:"/booking1",
        element:<Booking1/>
      },
      {
        path:"/writereport",
        element:<WriteReport/>
      },
      {
        path:"/acm",
        element:<Acm/>
      },
      {
        path:"/csi",
        element:<Csi/>
      },
      {
        path:"/gdse",
        element:<Gdse/>
      },
      {
        path:"/ieee",
        element:<Ieee/>
      },
      {
        path:"/iste",
        element:<Iste/>
      },
      {
        path:"/turinghut",
        element:<TuringHut/>
      }
    ]
    }
   ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
     
  )
}

export default App;
