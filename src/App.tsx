import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
    </Routes>
  );
}
