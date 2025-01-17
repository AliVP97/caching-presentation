import { cloneElement } from "react";

import { usePage } from "../../hooks";
import { findOrder } from "./utils";

export const withOrder = (children) => {
  const { page } = usePage();

  return children.map((child) =>
    cloneElement(child, { order: findOrder(children, child, page) }),
  );
};
