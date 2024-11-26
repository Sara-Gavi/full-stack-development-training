import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Game } from "./pages/Game/Game";
import { Author } from "./pages/Author/Author";
import { Category } from "./pages/Category/Category";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="games" element={<Game />} />
          <Route path="categories" element={<Category />} />
          <Route path="authors" element={<Author />} />
          <Route path="*" element={<Navigate to="/games" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
