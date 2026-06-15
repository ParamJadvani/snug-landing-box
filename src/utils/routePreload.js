export const routeLoaders = {
  "/": () => import("/src/pages/Home"),
  "/aboutus": () => import("/src/pages/AboutUS"),
  "/services": () => import("/src/pages/Services"),
  "/contact": () => import("/src/pages/ContactUS"),
  "/training": () => import("/src/pages/Training"),
  "/blog": () => import("/src/pages/Blog"),
};

const preloadedRoutes = new Set();

export function preloadRoute(path) {
  const loader = routeLoaders[path];

  if (!loader || preloadedRoutes.has(path)) {
    return;
  }

  preloadedRoutes.add(path);
  loader();
}
