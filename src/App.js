import "./App.css";
import MyAcount from "./components/MyAcount/MyAcount";
import Header from "./components/Header/Header";
import ToolBar from "./components/ToolBar/ToolBar";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Branding from "./components/Branding/Branding";
import TopProduct from "./components/TopProduct/TopProduct";
import SignUpMail from "./components/SignupByMail/SignUpMail";

function App() {
  return (
    <div className="App">
      <Header />
      <ToolBar />
      <Navigation />
      <Routes>
        <Route path="/my-account" element={<MyAcount />}></Route>
      </Routes>
      <Branding />
      <TopProduct />
      <SignUpMail />
      <Footer />
    </div>
  );
}

export default App;
