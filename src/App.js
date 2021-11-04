import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Invoice from "./Components/Invoice/Invoice";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { GlobalStorage } from "./Context/GlobalMode";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="invoice/:id" element={<Invoice />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
