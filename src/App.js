import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./action/productAction";
import { getCurrentUser } from "./action/userActions";
import { Routes, Route } from "react-router-dom";
import MyAcount from "./components/MyAcount/MyAcount";
import Header from "./components/Header/Header";
import ToolBar from "./components/ToolBar/ToolBar";
import Footer from "./components/Footer/Footer";
import Branding from "./components/Branding/Branding";
import TopProduct from "./components/TopProduct/TopProduct";
import SignUpMail from "./components/SignupByMail/SignUpMail";
import Home from "./components/Home/Home";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Details from "./components/MyAcount/Details/Details";
import Orders from "./components/MyAcount/Orders/Orders";
import ListUser from "./components/MyAcount/ListUser/ListUser";
import Shop from "./components/Shop/Shop";
import Compare from "./components/Compare/Compare";

const App = () => {
  const dispatch = useDispatch();
  const loadingProduct = useSelector((state) => state.productReducer.loading);
  useEffect(() => {
    dispatch(getAllData());
    const token = localStorage.getItem("token");
    dispatch(getCurrentUser(token));
  }, []);

  return (
    <div className="App">
      {loadingProduct ? (
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
            <Route path="compare" element={<Compare />}></Route>
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
