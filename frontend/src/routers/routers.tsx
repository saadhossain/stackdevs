import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ErrorElement from '../pages/ErrorElement';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])