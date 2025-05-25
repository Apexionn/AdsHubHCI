import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shell from "./components/layout/shell";

import Landing from "./pages/landing";
import Login from "./pages/login";
import SubCategory from "./pages/sub-category";
import Items from "./pages/items";
import ProductDetail from "./pages/details";
import Favorite from "./pages/favorite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Shell />}>
          
            <Route path="/" element={<Landing />} />

            <Route path="/:category" element={<SubCategory />} />

            <Route path="/:category/:subcategory" element={<Items />} />

            <Route
              path="/:category/:subcategory/:id"
              element={<ProductDetail />}
            />

            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
