import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { IndexPage } from "./Pages/IndexPage";
import { Layout } from "./Layouts/Layout";

const FavoritesPage = lazy(() => import('./Pages/FavoritesPage').then(module => ({ default: module.FavoritesPage })));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/favoritos" element={
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritesPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
