'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    alert('Thank you! Your message has been sent.');
    reset();
  };

  return (
    <main className="flex-1 bg-indigo-950 text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          React <span className="text-indigo-400">Form</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          react-hook-form
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-indigo-800 p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-lg bg-indigo-900 border ${
                    errors.name ? 'border-red-500' : 'border-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {errors.name && (
                  <p className="text-red-400 mt-1 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="your@email.com"
                  className={`w-full p-3 rounded-lg bg-indigo-900 border ${
                    errors.email ? 'border-red-500' : 'border-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {errors.email && (
                  <p className="text-red-400 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  placeholder="Write your message..."
                  className={`w-full p-3 rounded-lg bg-indigo-900 border ${
                    errors.message ? 'border-red-500' : 'border-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 mt-1 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 hover:bg-indigo-500 transition duration-300 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {isSubmitSuccessful && (
                <p className="text-green-400 mt-4 text-center">
                  Your message has been sent successfully!
                </p>
              )}
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
    </main>
  );
};

export default ContactPage;
