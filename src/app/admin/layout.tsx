import Children from "@/types/children";
import React, { Fragment } from "react";

const AdminLayout = ({ children }: Children) => {
  return (
    <Fragment>
      <h1>AdminLayout</h1>
      {children}
    </Fragment>
  );
};

export default AdminLayout;
