import React, { FC, useContext } from "react";
import { AppContext } from "../context/AppProvider";

const YourComponent: FC = () => {
  const { loggedIn } = useContext(AppContext);
  return <div>You {loggedIn ? "are" : "are not"} logged in.</div>;
};

export default YourComponent;
