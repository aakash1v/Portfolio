import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
