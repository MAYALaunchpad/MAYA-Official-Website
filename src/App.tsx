import indexRouter from "./router/indexRouter";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const element = useRoutes(indexRouter);

  // 点击按钮跳至中间
  const scrollToAnchor = (anchorName:string) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  return (
    <div className="App">
      <div className="ParentComponent">
        <Header scrollToAnchor={scrollToAnchor}/>
        { element }
        <Footer />
      </div>
    </div>
  );
}

export default App;
