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
import TopProduct from "./components/TopProduct/TopProduct";
import SignUpMail from "./components/SignupByMail/SignUpMail";
import Home from "./components/Home/Home";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Details from "./components/MyAcount/Details/Details";
import Orders from "./components/MyAcount/Orders/Orders";
import ListUser from "./components/MyAcount/ListUser/ListUser";
import Shop from "./components/Shop/Shop";
import Compare from "./components/Compare/Compare";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/MyAcount/AddProduct/AddProduct";
import Confirmation from "./components/Confirmation/Confirmation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WishList from "./components/WishList/WishList";
import UpdateProduct from "./components/MyAcount/UpdateProduct/UpdateProduct";

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
              <Route path="add-product" element={<AddProduct />}></Route>
              <Route path="update-product" element={<UpdateProduct />}></Route>
            </Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="compare" element={<Compare />}></Route>
            <Route path="wish-list" element={<WishList />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route
              path="confirm"
              element={
                <PrivateRoute>
                  <Confirmation />
                </PrivateRoute>
              }
            ></Route>
            <Route path="shop" element={<Shop />}>
              <Route path=":id" element={<Shop />}></Route>
            </Route>
          </Routes>
          <TopProduct />
          <SignUpMail />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
