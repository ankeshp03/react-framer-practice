import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import "./styles.css";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}
