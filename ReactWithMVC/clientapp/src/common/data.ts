export const configRouteBaseOnRole = [
  {
    role: "user",
    accessPage: ["/user", "/dashboard", "/test1"],
  },
  {
    role: "admin",
    accessPage: ["/user", "/dashboard", "/admin", "/test1", "/test2"],
  },
];
