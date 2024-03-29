import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import { UserContextProvider } from "./UserContext";
import { News } from "./pages/News";
import { LoginPage } from "./pages/LoginPage";
import { IndexPage } from "./pages/IndexPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutUs } from "./pages/AboutUs";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
      
        <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/account" element={<ProfilePage />} />

          {/* <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
