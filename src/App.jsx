import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const Main = lazy(() => import("./Pages/Landing"));
  const SingleProduct = lazy(() => import("./Pages/SingleProduct"));
  const Checkout = lazy(() => import("./Pages/Checkout"));
  // const Favorites = lazy(() => import("./Pages/Favorites"));
  // const Profile = lazy(() => import("./Pages/Profile"));

  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading..</h1>}>
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/item/:productID" element={<SingleProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            {/*<Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
