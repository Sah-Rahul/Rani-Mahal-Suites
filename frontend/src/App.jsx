import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Contact from "./components/Contact";
import MyBookings from "./components/MyBookings";
import Experience from "./components/Experience";

// Admin pages
import Layout from "./pages/HotelOwner/Layout";
import AddRooms from "./pages/HotelOwner/AddRooms";
import ListRoom from "./pages/HotelOwner/ListRoom";
import DashBoard from "./pages/HotelOwner/DashBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<AllRooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/contact" element={<Contact />} />

      {/* Hotel Owner Routes */}
      <Route path="/owner" element={<Layout />}>
        <Route index element={ <DashBoard />} />
        <Route path="/owner/add-room" element={<AddRooms />} />
        <Route path="/owner/list-room" element={ <ListRoom />} />
      </Route>
    </Routes>
  );
};

export default App;
