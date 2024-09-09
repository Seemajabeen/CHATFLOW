import {createBrowserRouter,RouterProvider} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import "./App.css";
import RegisteredUsers from "./components/registered-users/RegisteredUsers";

function App({children}){
    const browserRouter = createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'register',
                    element:<Register/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'registered-users',
                    element:<RegisteredUsers/>
                }

            ]
        }
    ]);

    return <RouterProvider router={browserRouter}>

    </RouterProvider>
}

export default App;