import React from "react";
import Main from "./Main";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <Main />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
