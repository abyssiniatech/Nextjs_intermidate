'use client';

import Image from 'next/image';

const Homepage = () => {
  return (
    <main className="flex-1 bg-indigo-950 text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-indigo-400">MyWebsite</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              We build modern web applications with Next.js, Tailwind CSS, and
              TypeScript. Fast, responsive, and visually stunning websites your
              users will love.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 transition duration-300 px-8 py-4 rounded-lg text-lg">
              Get Started
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96">
            <Image
              src="/coding.jfif"
              alt="Coding Illustration"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-indigo-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/react.png"
                  alt="React Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
              <p className="text-gray-300">
                Clean and contemporary UI using Tailwind CSS and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-indigo-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/next.svg"
                  alt="Next.js Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-300">
                Optimized for speed and SEO-friendly architecture with Next.js.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-indigo-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Deployment</h3>
              <p className="text-gray-300">
                Deploy seamlessly with Vercel for fast global hosting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-24 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-6">
              MyWebsite is dedicated to crafting high-quality web applications
              with a focus on performance, accessibility, and modern design
              trends.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 transition duration-300 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>

          <div className="relative w-full md:w-1/2 h-80 md:h-96">
            <Image
              src="/globe.svg"
              alt="Global Illustration"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
            {[
              { src: '/node.png', alt: 'Node.js' },
              { src: '/expressjs.png', alt: 'Express.js' },
              { src: '/file.svg', alt: 'File Handling' },
              { src: '/window.svg', alt: 'Windows' },
              { src: '/node1.png', alt: 'Node Variant' },
              { src: '/react.png', alt: 'React' },
              { src: '/next.svg', alt: 'Next.js' },
              { src: '/vercel.svg', alt: 'Vercel' },
            ].map((tech) => (
              <div key={tech.alt} className="w-16 h-16 relative">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-800 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your project?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Contact us today and let&apos;s build something amazing together with
          Next.js and Tailwind CSS.
        </p>
        <button className="bg-indigo-600 px-8 py-4 rounded-lg text-lg hover:bg-indigo-500 transition duration-300">
          Get in Touch
        </button>
      </section>
    </main>
  );
};

export default Homepage;
