import Navbar from "./Navbar";
import { Home, Pricing, About } from "./pages";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/pricing":
      Component = <Pricing />;
      break;
    case "/about":
      Component = <About />;
      break;
    default:
      Component = <Home />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{Component}</div>
    </>
  );
}

export default App;
