import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AddMoviePage from "./components/AddMoviePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
  
<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/add" element={<AddMoviePage />} />
      <Route path="/details" element={<RegisterPage />} />
    </Routes>
    <Footer></Footer></>
  );
}

export default App;
