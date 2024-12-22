import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Game } from "./pages/Game/Game";
import { Author } from "./pages/Author/Author";
import { Category } from "./pages/Category/Category";
import { Layout } from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
