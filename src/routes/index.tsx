import { RouteObject } from "react-router-dom";
import Breed from "../views/breed";
import Home from "../views/home";
import BreedDetails from "../views/breed/BreadDetails";
import WikiPetaverse from "../views/breed/WikiPetaverse";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "breed",
    children: [
      {
        index: true,
        element: <Breed />,
      },
      {
        path: ":id",
        element: <BreedDetails />,
      },
      {
        path: "wiki-petaverse",
        element: <WikiPetaverse />,
      },
    ],
  },
];

export default routes;
