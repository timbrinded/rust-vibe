import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("rust", "routes/rust.tsx"),
] satisfies RouteConfig;
