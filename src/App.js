import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage"
import Hotels from "./pages/Hotels/Hotels"
import Hotel from "./pages/Hotel/Hotel"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}   />
      <Route path="/hotels" element={<Hotels/>}   />
      <Route path="/hotels/:id" element={<Hotel/>}   />
    </Routes>
    </BrowserRouter>

  );
}

export default App;