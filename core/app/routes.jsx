import React from "react";
import {Route, IndexRoute} from "react-router";
import HomeRepView from "./containers/HomeRepPage";

export default (
  <Route path="/" component={HomeRepView}>
    <IndexRoute component={HomeRepView} />
  </Route>
);
