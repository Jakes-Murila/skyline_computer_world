import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AccountPage } from "./pages/AccountPage";
import { AdminPage } from "./pages/AdminPage";
import { BusinessPage } from "./pages/BusinessPage";
import { CartPage } from "./pages/CartPage";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SupportPage } from "./pages/SupportPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="products/:slug" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="wishlist" element={<CatalogPage title="Saved Products" />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
