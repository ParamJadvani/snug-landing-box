import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { routeLoaders } from "/src/utils/routePreload";

const Home = lazy(routeLoaders["/"]);
const AboutUS = lazy(routeLoaders["/aboutus"]);
const Services = lazy(routeLoaders["/services"]);
const ContactUS = lazy(routeLoaders["/contact"]);
const Training = lazy(routeLoaders["/training"]);
const Blog = lazy(routeLoaders["/blog"]);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <AboutUS /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <ContactUS /> },
    { path: "/training", element: <Training /> },
    { path: "/blog", element: <Blog /> },
    {
      path: "*",
      element: (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>404 Page NOT Found</h2>
        </div>
      ),
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
