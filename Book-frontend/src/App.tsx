import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
