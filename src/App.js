import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Instructors from "./Components/Instructors/Instructors";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
