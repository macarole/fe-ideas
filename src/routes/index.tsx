import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import Home from "../pages/Home";
import Idea from "../pages/Idea";
import IdeaList from "../pages/Idea/List";
import IdeaDetail from "../pages/Idea/Detail";
import Group from "../pages/Group";
import GroupList from "../pages/Group/List";
import GroupHome from "../pages/Group/Home";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "idea",
        element: <Idea />,
        children: [
          {
            path: "list",
            element: <IdeaList />,
          },
          {
            path: "detail",
            element: <IdeaDetail />,
          },
        ],
      },
      {
        path: "group",
        element: <Group />,
        children: [
          {
            path: "list",
            element: <GroupList />,
          },
          {
            path: "home",
            element: <GroupHome />,
          },
        ],
      },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
]);
