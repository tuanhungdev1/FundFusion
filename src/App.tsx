import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

export default function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/sign-in" element={<SignInPage />}></Route>
    </Routes>
  );
}
