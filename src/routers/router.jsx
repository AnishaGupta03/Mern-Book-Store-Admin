import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout"
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import SingleBlog from "../components/SingleBlog"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
         path:'/blog/:id',
         element:<SingleBlog/> 
        },
        {
            path:'/book/:id',
            element:<SingleBook/>,
            loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }

    ]
  },

  {
    path:"/admin/dashboard",
    element:<DashboardLayout/>,

    children:[
       {
        path:"/admin/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>
       },
       {
        path:"/admin/dashboard/upload",
        element:<UploadBook/>
       },

       {
        path:"/admin/dashboard/manage",
        element:<ManageBooks/>
       },

       {
        path: "/admin/dashboard/edit-books/:id",
    element: <EditBooks />,
    loader: async ({ params }) => {
        const id = params.id;
        console.log('Fetching book ID:', id);
        const response = await fetch(`http://localhost:5000/books/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching book: ${response.statusText}`);
        }
        return response.json();
    },
       },

    ]
  },

  {
    path:"/sign-up",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/logout",
    element:<Logout/>
  }

]);

export default router;
