import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
      </Routes>
    </Suspense>
  );
}
