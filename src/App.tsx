import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./ScrollToTopFunction";
import AccountPage from "./pages/AccountPage";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout";
import SharedLayout from "./layouts/SharedLayout";
import PrivacidadePage from "./pages/PrivacidadePage";
import SegurancaPage from "./pages/SegurancaPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SharedLayout />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/evento/:id" element={<EventPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/conta" element={<HeaderFooterLayout />} >
        <Route index element={<AccountPage />}/>
          <Route path="/conta/reservas" element={<AccountPage />} />
        </Route>
        <Route path="/privacidade" element={<HeaderFooterLayout />} >
          <Route index element={<PrivacidadePage />} />
        </Route>
        <Route path="/seguranca" element={<HeaderFooterLayout />} >
          <Route index element={<SegurancaPage />} />
        </Route>
        <Route path="/login" element={<HeaderFooterLayout />} >
          <Route index element={<LoginPage />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
