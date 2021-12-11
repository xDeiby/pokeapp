import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router";
import routes from "../routes";

export default function RoutesLayout(): ReactElement {
  const defaultView = routes.find((route) => route.default) || routes[0];

  return (
    <Routes>
      {/* All Routes */}
      {routes.map(({ path, view: View }) => (
        <Route key={path} path={path} element={<View />} />
      ))}

      {/* Redirect route */}
      <Route path="/*" element={<Navigate to={defaultView.to} />} />
    </Routes>
  );
}
