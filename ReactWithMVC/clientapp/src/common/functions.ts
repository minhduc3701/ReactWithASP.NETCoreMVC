import { configRouteBaseOnRole } from "./data";
// import { Redirect, Route, RouteProps } from "react-router-dom";

// export const RenderRouteHandleRoutesByRole = (props: RouteProps): any => {
//   let accountRole = localStorage.getItem("role") || "guess";
//   let idx = configRouteBaseOnRole.findIndex((r) => r.role === accountRole);
//   if (
//     accountRole &&
//     (configRouteBaseOnRole[idx].accessPage.some((p) => p === props.path) ||
//       props.path === "/")
//   ) {
//     return <Route {...props} />;
//   } else {
//     console.log("redirect");
//     return <Redirect to=""/>;
//   }
// };
