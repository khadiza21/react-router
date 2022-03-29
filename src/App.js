import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Friends from "./component/Friends/Friends";
import About from "./component/About/About"
import NotFound from "./component/NotFount/NotFound";
import Header from "./component/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="*" element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
