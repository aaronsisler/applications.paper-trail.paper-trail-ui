"use client";

import { Fragment } from "react";
import Link from "next/link";

export const Nav = () => {
  return (
    <Fragment>
      <nav className="flex">
        <Link className="mr-2" href="/">
          Home
        </Link>
        &nbsp;&nbsp;
        <Link className="mr-2" href="/auth">
          Auth
        </Link>
      </nav>
    </Fragment>
  );
};
