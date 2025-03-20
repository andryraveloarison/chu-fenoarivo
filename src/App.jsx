import styles from "./App.module.css";
import PreLoader from "./pages/PreLoader/PreLoader.jsx";
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx"; // Import de la page About
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/Service/Service.jsx";
import ServicePage from "./pages/Service/Service.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";

function App() {
  const preLoaderRef = useRef(null);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        gsap.to(preLoaderRef.current, {
          opacity: 0.9,
          y: 900,
          ease: Power3.easeOut,
          duration: 3,
          zIndex: -1,
        });
      }, 2500);
    };
    fakeDataFetch();
  }, []);

  return (
<Router basename="/">
<div className={styles.App}>


        {/* Configuration des Routes */}
        <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={styles.preloader} ref={preLoaderRef}>
                <PreLoader />
              </div>
              <Home />
            </>
          }/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
