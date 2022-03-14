export const configRouteBaseOnRole = [
  {
    role: "user",
    accessPage: ["/user", "/dashboard", "/test", "/test1"],
  },
  {
    role: "admin",
    accessPage: ["/user", "/dashboard", "/admin", "/test", "/test1", "/test2"],
  },
  {
    role: "guess",
    accessPage: ["/dashboard", "/test"],
  },
];
