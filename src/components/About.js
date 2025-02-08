import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* About Section */}
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-[#1E3A8A]">About Us</h1>
        <h2 className="text-2xl mt-4">Our Story, Our Mission</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Maryam Heva Foundation was established to address the pressing issue of limited access to education for underprivileged children. Our founder, [Founder's Name], was driven by a passion to make a difference in the lives of these young individuals.
        </p>
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6">Our Mission</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h4 className="text-xl font-semibold text-[#1E3A8A]">Educational Support</h4>
            <p className="mt-2 text-gray-700">
              Providing educational support to children of low-income earners.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h4 className="text-xl font-semibold text-[#1E3A8A]">Orphan Assistance</h4>
            <p className="mt-2 text-gray-700">
              Assisting orphans through school by covering tuition and mentorship.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h4 className="text-xl font-semibold text-[#1E3A8A]">Empowerment</h4>
            <p className="mt-2 text-gray-700">
              Empowering young minds to reach their full potential through education.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
