import { createBrowserRouter } from "react-router";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/pages/Home";
import { IdeasPage } from "./components/pages/IdeasPage";
import { ArticlePage } from "./components/pages/ArticlePage";
import { WorkPage } from "./components/pages/WorkPage";
import { ProjectPage } from "./components/pages/ProjectPage";
import { NotesPage } from "./components/pages/NotesPage";
import { AboutPage } from "./components/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "ideas", Component: IdeasPage },
      { path: "ideas/:slug", Component: ArticlePage },
      { path: "work", Component: WorkPage },
      { path: "work/:slug", Component: ProjectPage },
      { path: "notes", Component: NotesPage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: Home },
    ],
  },
]);
