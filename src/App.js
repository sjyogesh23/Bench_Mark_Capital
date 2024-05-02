import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import { Container } from "react-bootstrap";
import Display_Card from "./Utils/Img/Displaycard.png";
import NotFound from "./Components/NotFound";
import Yogesh from "./Components/Yogesh";
function App() {
  return (
    <div className="text-center min-h-screen bg-black text-white">
      <NavigationBar />
      <Container className="mt-16">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<img src={Display_Card} alt="" className="mx-auto" />}
            />
            <Route path="/SJY" element={<Yogesh />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
