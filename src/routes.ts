import { createBrowserRouter } from "react-router";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/pages/Home";
import { WorkPage } from "./components/pages/WorkPage";
import { ProjectPage } from "./components/pages/ProjectPage";
import { WritingPage } from "./components/pages/WritingPage";
import { PatentsPage } from "./components/pages/PatentsPage";
import { AboutPage } from "./components/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: WorkPage },
      { path: "work/:slug", Component: ProjectPage },
      { path: "writing", Component: WritingPage },
      { path: "patents", Component: PatentsPage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: Home },
    ],
  },
]);
