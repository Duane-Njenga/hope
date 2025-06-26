import App from "./App";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import DonatePage from "./pages/Donate";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/Projects";
import RegisterPage from "./pages/Register";
import VolunteerPage from "./pages/Volunteer";

const routes = [
    {
        path:"/",
        element: <App />,
        // errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<HomePage />
            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path: "/projects",
                element: <ProjectsPage />
            },
            {
                path: "/donate",
                element: <DonatePage/>
            },
            {
                path: "/volunteer",
                element: <VolunteerPage/>
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path:"/register",
                element:<RegisterPage />
            },
            {
                path:"/login",
                element:<LoginPage />
            },
        ]


    },
    
]

export default routes