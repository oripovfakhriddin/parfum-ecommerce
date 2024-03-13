import NavLink from "@/components/navlink";
import Image from "next/image";
import React, { Fragment } from "react";

const PublicHeader = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <NavLink href="/">Bosh sahifa</NavLink>
          <NavLink href="/about">Haqida</NavLink>
          <NavLink href="/products">Mahsulotlar</NavLink>
          <NavLink href="/carts">Savat</NavLink>
          <NavLink href="/favourite">Sevimli</NavLink>
          <NavLink href="/orders">Buyurtma</NavLink>
          <NavLink href="/login">Kirish</NavLink>
          <NavLink href="/register">{`Ro'yhatdan o'tish`}</NavLink>
          <NavLink href="/account">Hisob</NavLink>
        </nav>
      </header>
    </Fragment>
  );
};

export default PublicHeader;
