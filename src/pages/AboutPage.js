import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">About CarSokoni</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Your premier destination for automotive excellence. We provide an extensive collection of certified vehicles 
              with honest pricing and unmatched customer experience across East Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-medium text-black mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Established in 2019, CarSokoni has evolved into East Africa's premier digital automotive marketplace. 
              We began with a clear vision: to revolutionize vehicle acquisition through transparency, convenience, and universal accessibility.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we showcase thousands of exceptional vehicles from verified dealers and private owners throughout the region. 
              Our innovative platform merges advanced technology with personalized guidance to guarantee every client discovers their ideal automotive companion.
            </p>
            <p className="text-gray-600">
              We firmly believe that purchasing a vehicle should be an exhilarating journey, not a challenging ordeal. This conviction drives 
              our commitment to building a platform founded on transparency, reliability, and complete customer satisfaction.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="About CarSokoni"
              className="rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-black text-center mb-12">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Integrity</h3>
              <p className="text-gray-600">
                We establish confidence through complete transparency, accurate descriptions, and thoroughly verified vehicle data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Excellence</h3>
              <p className="text-gray-600">
                We harness cutting-edge technology to deliver the finest automotive purchasing experience in East Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Client Success</h3>
              <p className="text-gray-600">
                Our clients drive every decision we make. We're dedicated to supporting you throughout your entire automotive journey.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-medium text-black mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'David Kinyua', role: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
              { name: 'Grace Mutindi', role: 'Chief Operations Officer', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face' },
              { name: 'Michael Ochieng', role: 'Technology Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="text-xl font-medium text-black">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
