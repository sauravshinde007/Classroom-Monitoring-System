import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const SessionAnalysis = lazy(() => import("../views/ui/SessionAnalysis.js"));
const Grid = lazy(() => import("../views/ui/Grid"));
const SessionHistory = lazy(() => import("../views/ui/SessionHistory.js"));
const Forms = lazy(() => import("../views/ui/Forms"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/session-analysis", exact: true, element: <SessionAnalysis /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/session-history", exact: true, element: <SessionHistory /> },
      { path: "/forms", exact: true, element: <Forms /> },
    ],
  },
];

export default ThemeRoutes;
