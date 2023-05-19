import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../view/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "/goods",
    //     element: <Goods />,
    //   },
    // ],
  },
];

export default routes;
