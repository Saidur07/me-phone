import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Qna from "./Components/Qna/Qna";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Qna></Qna>
      <Footer></Footer>
    </div>
  );
}

export default App;
