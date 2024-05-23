import "./styles/App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { app, analytics } from "./config/firebase";
import HomePage from "./pages/Home";
import Illustrations from "./pages/Illustrations";
import Webs from "./pages/Webs";
import About from "./pages/About";
import Navbar from "./components/Navbar";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RouterLayout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/about", element: <About /> },
//       { path: "/illustrations", element: <Illustrations /> },
//       { path: "/webs", element: <Webs /> },
//     ],
//   },
// ]);

function App() {
  // useLocation is provided by React Router and serves its purpose by
  // giving the window.location of a route to control AnimatePresence
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/webs" element={<Webs />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
