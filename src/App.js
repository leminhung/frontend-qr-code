import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "./components/Container";
import ListQRUsers from "./components/ListQRUsers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users/:userId' element={<Container />} />
        <Route path='/users/qrcode' element={<ListQRUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
