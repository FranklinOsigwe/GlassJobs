import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/Myjobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/post-job",
        element: <PostJob/>
      },
      {
        path:"/my-jobs",
        element: <MyJobs/>
      },
      {
        path:"/salary",
        element: <Salary/>
      }
    
    ],
  },
]);

export default router;
