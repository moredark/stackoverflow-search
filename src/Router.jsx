import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:questionId" element={<QuestionPage />} />
    </Routes>
  );
}

export default Router;
