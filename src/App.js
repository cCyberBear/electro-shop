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
import ListUser from "./components/MyAcount/ListUser/ListUser";
import Shop from "./components/Shop/Shop";
import { useDispatch } from "react-redux";
import { getCategory, getProduct } from "./action/productAction";
import { getCurrentUser } from "./action/userActions";
import axios from "axios";

const App = () => {
  const [splash, setSplash] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct());
    const token = localStorage.getItem("token");
    dispatch(getCurrentUser(token));
    const timout = setTimeout(() => {
      setSplash(false);
    }, 5000);
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
              <Route path="details" element={<Details />}></Route>
              <Route path="orders" element={<Orders />}></Route>
              <Route path="list-all-user" element={<ListUser />}></Route>
            </Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}>
              <Route path=":id" element={<Shop />}></Route>
            </Route>
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
