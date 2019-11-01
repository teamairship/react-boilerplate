import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routes } from "./routes";
import { AppProvider } from "../context";

// Pages
import { Home } from "../pages";
const ExamplePage = lazy(() => import("../pages/ExamplePage"));

const Router: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading...</span>}>
      <Switch>
        <AppProvider>
          <Route exact path={routes.example} render={() => <ExamplePage />} />
          <Route exact path={routes.home}>
            <Home />
          </Route>
        </AppProvider>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
