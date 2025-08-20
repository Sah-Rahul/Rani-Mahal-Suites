import React, { useState } from 'react';
import { assets , cities} from '../assets/assets';

 
const HotelRegistration = () => {
  const [hotel, setHotel] = useState({
    name: '',
    contact: '',
    address: '',
    city: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setHotel((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hotel Registered:", hotel);
    // Add backend integration here (e.g. Axios POST request)
  };

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
      <form onSubmit={handleSubmit} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        
        {/* Left Side Image (Hidden on small screens) */}
        <img
          src={assets.regImage}
          alt="registration illustration"
          className='w-1/2 rounded-xl hidden md:block'
        />
        
        {/* Right Side Form */}
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          
          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            alt="close icon"
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
          />

          {/* Header */}
          <p className='text-2xl font-semibold mt-6 mb-6'>Register Your Hotel</p>

          {/* Hotel Name */}
          <div className='w-full mt-2'>
            <label htmlFor="name" className="font-medium text-gray-500">Hotel Name</label>
            <input
              id='name'
              type="text"
              placeholder="Type here"
              value={hotel.name}
              onChange={handleChange}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* Phone */}
          <div className='w-full mt-4'>
            <label htmlFor="contact" className="font-medium text-gray-500">Phone</label>
            <input
              id='contact'
              type="text"
              placeholder="Type here"
              value={hotel.contact}
              onChange={handleChange}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* Address */}
          <div className='w-full mt-4'>
            <label htmlFor="address" className="font-medium text-gray-500">Address</label>
            <input
              id='address'
              type="text"
              placeholder="Type here"
              value={hotel.address}
              onChange={handleChange}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* City Dropdown */}
          <div className='w-full mt-4'>
            <label htmlFor="city" className="font-medium text-gray-500">City</label>
            <select
              id="city"
              value={hotel.city}
              onChange={handleChange}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='bg-green-800 cursor-pointer text-white px-6 py-2 rounded mt-6 hover:bg-green-700 transition'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelRegistration;