'use client';

import Image from 'next/image';

const Productpage = () => {
  return (
    <main className="flex-1 bg-indigo-950 text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-indigo-400">Products</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              Discover our range of cutting-edge web applications and tools
              built with Next.js, React, Node.js, and modern technologies. Fast,
              scalable, and user-friendly.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 transition duration-300 px-8 py-4 rounded-lg text-lg">
              Explore Now
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96">
            <Image
              src="/file.svg"
              alt="Product Illustration"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Product Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'File Manager',
                desc: 'Easily manage files with our intuitive interface.',
                img: '/file.svg',
              },
              {
                title: 'Global Access',
                desc: 'Reach your apps from anywhere with cloud hosting.',
                img: '/globe.svg',
              },
              {
                title: 'Node.js Powered',
                desc: 'High-performance backend built with Node.js.',
                img: '/node.png',
              },
              {
                title: 'Express.js API',
                desc: 'Seamless API integration for your applications.',
                img: '/expressjs.png',
              },
              {
                title: 'React UI',
                desc: 'Modern and responsive user interface using React.',
                img: '/react.png',
              },
              {
                title: 'Next.js SEO',
                desc: 'Optimized for search engines with Next.js.',
                img: '/next.svg',
              },
            ].map((product) => (
              <div
                key={product.title}
                className="bg-indigo-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-300">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-800 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested in our products?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Get in touch today and explore how our tools can help your business
          grow and scale with modern web technologies.
        </p>
        <button className="bg-indigo-600 px-8 py-4 rounded-lg text-lg hover:bg-indigo-500 transition duration-300">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Productpage;
