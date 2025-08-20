import { useState, useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Layout from "./Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const departments = [
    {
      name: "Reservations",
      phone: "+91 98765 43210",
      email: "reservations@ranihotel.com",
      hours: "24/7",
    },
    {
      name: "Concierge",
      phone: "+91 98765 43211",
      email: "concierge@ranihotel.com",
      hours: "6:00 AM - 12:00 AM",
    },
    {
      name: "Events & Banquets",
      phone: "+91 98765 43212",
      email: "events@ranihotel.com",
      hours: "9:00 AM - 7:00 PM",
    },
    {
      name: "Guest Services",
      phone: "+91 98765 43213",
      email: "services@ranihotel.com",
      hours: "24/7",
    },
  ];

  return (
    <>
      <Layout>
        <div className="pt-20 min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80"
              alt="Hotel Lobby"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div
                className={`text-center text-white transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  We're here to make your stay exceptional
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`px-6 py-3  cursor-pointer rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "contact"
                      ? "bg-green-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-green-50 shadow-md"
                  }`}
                >
                  General Contact
                </button>
                <button
                  onClick={() => setActiveTab("booking")}
                  className={`px-6 cursor-pointer py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "booking"
                      ? "bg-green-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-green-50 shadow-md"
                  }`}
                >
                  Booking Inquiry
                </button>
              </div>

              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}

                <div className="bg-white h-[700px] rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    {activeTab === "contact"
                      ? "Get in Touch"
                      : "Booking Inquiry"}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Room Reservation</option>
                          <option value="events">Events & Banquets</option>
                          <option value="services">Guest Services</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {activeTab === "booking" && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          >
                            {[...Array(8)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1} Guest{i > 0 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="lg:mb-0 mt-12 w-full cursor-pointer bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="lg:mb-0 mt-26 space-y-8">
                  {/* Department Contacts */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Department Contacts
                    </h2>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {dept.name}
                          </h3>

                          <div className="flex gap- items-center">
                            <FaPhoneAlt />
                            <p className="text-green-600 text-sm mb-1">
                              , {dept.phone}
                            </p>
                          </div>
                          <div className="flex gap- items-center">
                            <MdOutlineMail />
                            <p className="text-green-600 text-sm mb-1">
                              , {dept.email}
                            </p>
                          </div>
                          <div className="flex gap- items-center">
                            <MdOutlineWatchLater />
                            <p className="text-gray-600 text-sm">
                              , {dept.hours}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

          {/* CTA Section */}
          <div className="relative py-16 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80"
              alt="Hotel Reception"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0  "></div>
            <div className="relative px-4 md:px-16 lg:px-24 xl:px-32">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Book Your Stay?
                </h2>
                <p className="text-xl mb-8">
                  Experience luxury and comfort like never before
                </p>
                <button className="bg-white cursor-pointer text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
