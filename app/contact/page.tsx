'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission (API, email, etc.)
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="flex-1 bg-indigo-950 text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-indigo-400">Us</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Have questions, ideas, or feedback? Fill out the form below and we
          will get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-indigo-800 p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full p-3 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 transition duration-300 px-6 py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">info@mywebsite.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-300">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      {/* Map / Illustration Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.644731708378!2d38.7457!3d9.0317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b2b8c7076d%3A0xe4e8b3e272f7b83e!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
