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

function App() {
  return (
    <div className="App">
      <Header />
      <ToolBar />
      <Routes>
        <Route path="/my-account" element={<MyAcount />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Branding />
      <TopProduct />
      <SignUpMail />
      <Footer />
    </div>
  );
}

export default App;
