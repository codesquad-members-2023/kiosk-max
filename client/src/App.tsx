import { useState } from "react";
import Home from "./components/Home";
import Result from "./components/Result";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const changePage = (path: Path) => {
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <Home changePage={changePage} />;
      case "/result":
        return <Result changePage={changePage} />;
      default:
        return <Home changePage={changePage} />;
    }
  };

  return <>{renderPage()}</>;
}
