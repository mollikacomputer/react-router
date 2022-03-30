import "./App.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/about/AboutUs";
import { Route, Routes } from "react-router-dom";
import Friends from "./components/friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import FriendDetails from "./components/FriendDetails/FriendDetails";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/friends" element={<Friends /> }></Route>

        //রাউট প্যামিটার :  এর কারণে ফ্রাইন্ড এর পরে যাই দেও /ভুল হলেও দেখা যাবে

        <Route path="/friend/:friendId" element={<FriendDetails/>} > </Route>

        <Route path="*" element={<NotFound></NotFound>} > </Route>
      </Routes>
    </div>
  );
}
export default App;
