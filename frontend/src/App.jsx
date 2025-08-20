import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MyBookings from "./components/MyBookings";

import HotelRegistration from "./components/HotelRegistration";

const App = () => {
  return (
    <>
      {false && <HotelRegistration />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<AllRooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />

        {/* admin routes  */}

        
      </Routes>
    </>
  );
};

export default App;
