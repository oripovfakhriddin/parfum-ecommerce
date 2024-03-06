import PublicFooter from "@/components/layouts/public/footer";
import PublicHeader from "@/components/layouts/public/header";
import Children from "@/types/children";
import React, { Fragment } from "react";

const PublicLayout = ({ children }: Children) => {
  return (
    <Fragment>
      <PublicHeader />
      {children}
      <PublicFooter />
    </Fragment>
  );
};

export default PublicLayout;
