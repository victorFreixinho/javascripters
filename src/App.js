import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// modificação
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="teste" element={<div>teste</div>} />
          <Route path="*" element={<div>default</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
