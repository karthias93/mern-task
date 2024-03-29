import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./pages/Task";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Design from "./pages/Design";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/tasks/add" element={ <Task /> } />
          <Route path="/tasks/:taskId" element={ <Task /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
