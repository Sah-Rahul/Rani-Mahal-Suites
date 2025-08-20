import { testimonials } from "../assets/assets";
import StarRating from "./Rating";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        What Our Guests Say
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We’re proud to share the experiences of our valued guests who made unforgettable memories with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-green-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.address}</p>
              </div>
            </div>

            <p className="text-yellow-500 flex gap-2 mb-2">
              <StarRating />
            </p>

            <p className="text-gray-700   ">"{item.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;