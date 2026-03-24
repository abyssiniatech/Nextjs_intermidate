'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="flex-1 bg-indigo-950 text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
            At MyWebsite, we craft modern web applications using Next.js,
            Tailwind CSS, and TypeScript. Our mission is to deliver fast,
            responsive, and visually stunning websites.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We are a team of passionate developers dedicated to building
              high-quality web applications. Using modern technologies and best
              practices, we ensure performance, scalability, and accessibility.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tailwind CSS helps us create stunning, responsive designs quickly,
              while Next.js provides the best performance and SEO-friendly
              architecture.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-96">
            <Image
              src="/coding.jfif"
              alt="About Illustration"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-indigo-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Alice', img: '/react.png', role: 'Frontend Developer' },
              { name: 'Bob', img: '/next.svg', role: 'Backend Developer' },
              {
                name: 'Charlie',
                img: '/node.png',
                role: 'Full Stack Developer',
              },
              { name: 'Dana', img: '/expressjs.png', role: 'API Specialist' },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-indigo-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
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
              { src: '/react.png', alt: 'React' },
              { src: '/next.svg', alt: 'Next.js' },
              { src: '/node.png', alt: 'Node.js' },
              { src: '/expressjs.png', alt: 'Express.js' },
              { src: '/file.svg', alt: 'File Handling' },
              { src: '/globe.svg', alt: 'Global' },
              { src: '/vercel.svg', alt: 'Vercel' },
              { src: '/window.svg', alt: 'Windows' },
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

      {/* Call to Action Section */}
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

export default AboutPage;
