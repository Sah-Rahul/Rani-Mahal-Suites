import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('dining');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}, []);

  const experiences = {
    dining: {
      title: "Fine Dining",
      description: "Experience culinary excellence with our world-class restaurants and bars",
      features: [
        "Michelin-starred restaurant",
        "Rooftop bar with city views", 
        "Private dining rooms",
        "Wine cellar tours"
      ],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80"
    },
    spa: {
      title: "Luxury Spa",
      description: "Rejuvenate your mind and body with our premium wellness treatments",
      features: [
        "Full-service spa",
        "Infinity pool",
        "Yoga & meditation classes",
        "Personal wellness consultants"
      ],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    },
    activities: {
      title: "Activities",
      description: "Discover unique experiences and adventures during your stay",
      features: [
        "City tours & excursions",
        "Cultural workshops",
        "Adventure sports",
        "Local market visits"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80"
    },
    events: {
      title: "Events & Meetings",
      description: "Host memorable events in our sophisticated venues",
      features: [
        "Grand ballroom",
        "Conference facilities",
        "Wedding planning",
        "Corporate retreats"
      ],
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=80"
    }
  };

   

  return (
   <>
   <Layout >
     <div className='pt-20 min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative h-96 overflow-hidden'>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80"
          alt="Hotel Experience"
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <div className={`text-center text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className='text-5xl md:text-6xl font-bold mb-4'>Unforgettable Experiences</h1>
            <p className='text-xl md:text-2xl font-light'>Discover luxury redefined at RaniHOTEL</p>
          </div>
        </div>
      </div>

      {/* Experience Tabs */}
      <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Curated Experiences</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Every moment at RaniHOTEL is designed to create lasting memories
            </p>
          </div>

          {/* Tab Navigation */}
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {Object.keys(experiences).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                    : 'bg-white text-gray-700 hover:bg-green-50 shadow-md'
                }`}
              >
                {experiences[tab].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            <div className='md:flex'>
              <div className='md:w-1/2'>
                <img 
                  src={experiences[activeTab].image}
                  alt={experiences[activeTab].title}
                  className='w-full h-64 md:h-96 object-cover'
                />
              </div>
              <div className='md:w-1/2 p-8 md:p-12'>
                <h3 className='text-3xl font-bold text-gray-800 mb-4'>
                  {experiences[activeTab].title}
                </h3>
                <p className='text-gray-600 text-lg mb-8'>
                  {experiences[activeTab].description}
                </p>
                <div className='space-y-3'>
                  {experiences[activeTab].features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className='mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-green-700 transition-colors shadow-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-16 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>Gallery</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=80",
              "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww", 
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=80"
            ].map((img, index) => (
              <div key={index} className='group relative overflow-hidden rounded-xl shadow-lg'>
                <img 
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className='w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
              </div>
            ))}
          </div>
        </div>
      </div>

       

      {/* CTA Section */}
      <div className='relative py-20 overflow-hidden'>
        <img 
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&auto=format&fit=crop&q=80"
          alt="Hotel Lobby"
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0  '></div>
        <div className='relative px-4 md:px-16 lg:px-24 xl:px-32'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Experience Luxury?</h2>
            <p className='text-xl mb-8'>Book your stay and create unforgettable memories with us</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to={'/rooms'}><button className='cursor-pointer bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg'>
                Book Now
              </button></Link>
              <button className='cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Layout>
   </>
  );
};

export default Experience;