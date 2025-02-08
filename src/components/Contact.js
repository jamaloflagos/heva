import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-[#1E3A8A]">Contact Us</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Have any questions or want to get involved? Reach out to us using the form below or through our contact details.
        </p>

        <div className="mt-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <form>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-[#1E3A8A] text-white py-2 px-6 rounded hover:bg-[#163A6A]">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-lg text-gray-700">
          <p><strong>Email:</strong> contact@maryamhevafoundation.org</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Charity Street, City, Country</p>
        </div>
      </section>
    </div>
  );
}
