import "./App.css";
import MyAcount from "./components/MyAcount/MyAcount";
import Header from "./components/Header/Header";
import ToolBar from "./components/ToolBar/ToolBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Branding from "./components/Branding/Branding";
import TopProduct from "./components/TopProduct/TopProduct";
import SignUpMail from "./components/SignupByMail/SignUpMail";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Details from "./components/MyAcount/Details/Details";
import Orders from "./components/MyAcount/Orders/Orders";

const App = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const timout = setTimeout(() => {
      setSplash(false);
    }, 3000);
    return () => {
      clearInterval(timout);
    };
  }, []);

  return (
    <div className="App">
      {splash ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <ToolBar />
          <Routes>
            <Route path="my-account" element={<MyAcount />}>
              <Route exact path="details" element={<Details />}></Route>
              <Route
                exact
                path="/my-account/orders"
                element={<Orders />}></Route>
            </Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Branding />
          <TopProduct />
          <SignUpMail />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
